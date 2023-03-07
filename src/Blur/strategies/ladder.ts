import { randomInt } from 'crypto'
import Decimal from 'decimal.js-light'
import { strategy } from '../../config.js'
import { getBalance } from '../../libs/ethers.js'
import { delay } from '../../libs/utils.js'
import { Collection } from '../libs/collection.js'
import type { BidLevel } from '../libs/types.js'

export class LadderStrategyCollection extends Collection {
  protected async onBidsUpdate() {
    this.onBidsUpdateActivated = false

    if (!this.bidLevels[0] || !this.bidLevels[1] || this.volume.day === undefined) {
      this.logger.info({ volume: this.volume }, 'Not enough liquidity')
      await this.removeBids('0')
    } else {
      const target = new Decimal(this.volume.day).div(this.bidLevels[0].price).mul(strategy.coef1)
      const skipped: BidLevel[] = []

      for (const [i, level] of this.bidLevels.entries()) {
        if (i === 0) {
          skipped.push(level)
          continue
        }

        const currentDepth = getDepth(skipped)

        if (currentDepth.gt(target)) {
          const balance = await getBalance()
          const price = level.price
          const size = new Decimal(balance).dividedToIntegerBy(price).toNumber()
          const highestBid = this.highestBid()

          if (size === 0) {
            this.logger.info({ balance, size, target, price, volume: this.volume }, 'Size is zero')
            await this.removeBids(addOne(balance))
          } else if (
            (price !== highestBid.price || size !== highestBid.size) &&
            (currentDepth.gt(highestBid.depth.mul(strategy.coef2)) ||
              currentDepth.lt(highestBid.depth.mul(strategy.coef3)))
          ) {
            this.logger.warn({ balance, size, target, price }, 'New bid is calculated')

            await this.removeBids(addOne(price))

            await delay(100)

            for (const levelJ of this.bidLevels.slice(i, strategy.num1).values()) {
              if (!this.bids.has(levelJ.price)) {
                const sizeJ = new Decimal(balance).dividedToIntegerBy(levelJ.price).toNumber()
                const depthJ = getDepth(skipped)

                await delay(randomInt(200, 500))
                await this.placeBid({ price: levelJ.price, size: sizeJ, depth: depthJ })

                skipped.push(levelJ)
              }
            }
          }

          break
        } else {
          skipped.push(level)
        }
      }
    }

    this.onBidsUpdateActivated = true
  }
}

function getDepth(bidLevels: BidLevel[]): Decimal {
  let total = new Decimal(0)

  for (const level of bidLevels) {
    total = total.add(level.executableSize)
  }

  return total
}

function addOne(price: string) {
  return new Decimal(price).add('0.01').toString()
}
