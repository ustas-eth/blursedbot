import Decimal from 'decimal.js-light'
import { strategy } from '../../config.js'
import { getBalance } from '../../libs/ethers.js'
import { delay } from '../../libs/utils.js'
import { Collection } from '../libs/collection.js'
import type { Bid, BidLevel } from '../libs/types.js'

export class BasicStrategyCollection extends Collection {
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
            await this.removeBids('0')
          } else if (
            (price !== highestBid.price || size !== highestBid.size) &&
            (currentDepth.gte(highestBid.depth.mul(strategy.coef2)) ||
              currentDepth.lte(highestBid.depth.mul(strategy.coef3)))
          ) {
            this.logger.warn({ balance, size, target, price }, 'New bid is calculated')
            await this.replaceBid({ price, size, depth: currentDepth })
          }

          break
        } else {
          skipped.push(level)
        }
      }
    }

    this.onBidsUpdateActivated = true
  }

  async replaceBid(bid: Bid) {
    await this.removeBids('0')
    await delay(100)
    await this.placeBid(bid)
  }
}

function getDepth(bidLevels: BidLevel[]): Decimal {
  let total = new Decimal(0)

  for (const level of bidLevels) {
    total = total.add(level.executableSize)
  }

  return total
}
