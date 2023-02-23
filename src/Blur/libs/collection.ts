import type { Page } from 'puppeteer'
import { blur } from '../../config.js'
import { browser } from '../../libs/puppeteer.js'
import { Decoder } from 'socket.io-parser'
import Decimal from 'decimal.js-light'
import { wallet } from '../../libs/ethers.js'
import type { Bid, BidLevel, CancelBidResponse, FormatBidResponse, SubmitBidResponse } from './types.js'
import { blurApiRequest } from './requests.js'
import { logger } from '../../libs/logs.js'

export abstract class Collection {
  name: string
  address: string

  protected logger
  protected started = false
  protected volume: { fifteen?: string; day?: string; week?: string } = {}
  protected bidLevels: BidLevel[] = []
  protected bid?: Bid

  private page?: Page
  private decoder = new Decoder()

  constructor(name: string, address: string) {
    if (!blur.collections.some((c) => c.name === name && c.address === address))
      throw Error(`new Collection(): Collection params '${name}:${address}' aren't in the config`)

    this.name = name
    this.address = address
    this.logger = logger.child({ collection: { name, address } })

    this.logger.info(`New Collection`)
  }

  async openCollection() {
    const page = await browser.newPage()

    // Set hook on WebSocket connection
    const cdp = await page.target().createCDPSession()
    await cdp.send('Network.enable')
    await cdp.send('Page.enable')

    cdp.on(
      'Network.webSocketFrameReceived',
      (params: {
        requestId: string
        timestamp: number
        response: { opcode: number; mask: boolean; payloadData: string }
      }) => this.decoder.add(params.response.payloadData)
    )

    this.decoder.on('decoded', (packet) => {
      const data: unknown = packet.data
      if (data instanceof Array<unknown> && typeof data[0] === 'string' && data[1] instanceof Object)
        switch (data[0]) {
          case `${this.address}.denormalizer.collectionBidPriceUpdates`:
            if (data[1].updates instanceof Array<unknown>) this.updateBidLevels(data[1].updates)
            break
          case `${this.address}.stats.volumeUpdate`:
            if (data[1]?.volume15m?.amount) this.volume.fifteen = data[1].volume15m.amount
            if (data[1]?.volume1?.amount) this.volume.day = data[1].volume1.amount
            if (data[1]?.volume7?.amount) this.volume.week = data[1].volume7.amount
            break
        }
    })

    // Set hook on API responses
    page.on('response', async (event) => {
      if (event.headers()['content-type']?.includes('application/json'))
        event
          .json()
          .then(
            (data: {
              success?: boolean
              priceLevels?: BidLevel[]
              collection?: {
                volumeFifteenMinutes?: { amount: string }
                volumeOneDay?: { amount: string }
                volumeOneWeek?: { amount: string }
              }
            }) => {
              if (data.success === true) {
                if (event.url().includes('executable-bids') && data.priceLevels) {
                  this.updateBidLevels(data.priceLevels)
                  this.logger.info('API executable-bids hook')
                } else if (event.url().includes(`collections/${this.name}`) && data.collection) {
                  const {
                    collection: { volumeFifteenMinutes, volumeOneDay, volumeOneWeek },
                  } = data

                  if (volumeFifteenMinutes?.amount) this.volume.fifteen = volumeFifteenMinutes.amount
                  if (volumeOneDay?.amount) this.volume.day = volumeOneDay.amount
                  if (volumeOneWeek?.amount) this.volume.week = volumeOneWeek.amount

                  this.logger.info({ volumeFifteenMinutes, volumeOneDay, volumeOneWeek }, 'API collections hook')
                }
              }
            }
          )
          .catch((err) => this.logger.error(err))
    })

    // Open Bids page
    await page.goto(`https://blur.io/collection/${this.name}/bids`)

    this.page = page
    this.started = true

    this.logger.warn('Collection page is now open')
  }

  protected async placeBid(price: string, size: number) {
    if (!this.page) throw Error(`Collection.placeBid(): Page isn't open yet`)

    const date = new Date()
    date.setFullYear(new Date().getFullYear() + 1)
    const expirationTime = date.toISOString()

    const format: FormatBidResponse = await blurApiRequest(
      this.page,
      'https://core-api.prod.blur.io/v1/collection-bids/format',
      `{"price":{"unit":"BETH","amount":"${price}"},"quantity":${size},"expirationTime":"${expirationTime}","contractAddress":"${this.address}"}`
    )

    if (format.success !== true || !format.signatures?.[0])
      throw Error(`Collection.placeBid(): Format request wasn't successful: ${price} ${size} ${JSON.stringify(format)}`)

    const {
      signData: { domain, types, value },
      marketplaceData,
    } = format.signatures[0]

    const signature = await wallet.signTypedData(domain, types, value)

    const submit: SubmitBidResponse = await blurApiRequest(
      this.page,
      'https://core-api.prod.blur.io/v1/collection-bids/submit',
      `{"signature":"${signature}","marketplaceData":${JSON.stringify(marketplaceData)}}`
    )

    if (submit.success !== true)
      throw Error(
        `Collection.placeBid(): Submit request wasn't successful: ${price} ${size} ${JSON.stringify(
          submit
        )} ${signature}`
      )

    this.bid = { price, size }

    this.logger.warn(this.bid, 'Bid placed')
  }

  protected async removeBid(): Promise<boolean> {
    if (!this.page) throw Error(`Collection.removeBid(): Page isn't open yet`)
    if (!this.bid) return false

    const cancel: CancelBidResponse = await blurApiRequest(
      this.page,
      'https://core-api.prod.blur.io/v1/collection-bids/cancel',
      `{"prices":["${this.bid.price}"],"contractAddress":"${this.address}"}`
    )

    if (cancel.success !== true)
      throw Error(
        `Collection.removeBid(): Cancel request wasn't successful: ${JSON.stringify(this.bid)} ${JSON.stringify(
          cancel
        )}`
      )

    this.logger.warn(this.bid, 'Bid removed')

    return delete this.bid
  }

  protected abstract onBidsUpdate(): Promise<void>

  private updateBidLevels(data: unknown) {
    if (!(data instanceof Array)) throw Error(`Collection.updateBidLevels(): data isn't Array`)

    const updates: BidLevel[] = data.map((update) => {
      if (typeof update.price !== 'string' || typeof update.executableSize !== 'number')
        throw Error(
          `Collection.updateBidLevels(): update ${JSON.stringify(update)} doesn't have a price or executableSize`
        )
      return { price: update.price, executableSize: update.executableSize }
    })

    for (const update of updates) {
      const index = this.bidLevels.findIndex((level) => level.price === update.price)

      if (index >= 0) {
        if (update.executableSize > 0) this.bidLevels[index] = update
        else if (update.executableSize === 0) this.bidLevels.splice(index, 1)
      } else if (update.executableSize > 0) {
        this.bidLevels.push(update)
        this.bidLevels.sort((a, b) => new Decimal(b.price).sub(a.price).toNumber())
      }
    }

    this.logger.info({ updates }, 'Bid levels updates')

    if (this.started) this.onBidsUpdate()
  }
}
