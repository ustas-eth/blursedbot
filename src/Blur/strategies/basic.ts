import Decimal from 'decimal.js-light'
import { strategy } from '../../config.js'
import { getBalance } from '../../libs/ethers.js'
import { Collection } from '../libs/collection.js'
import type { BidLevel } from '../libs/types.js'

export class BasicStrategyCollection extends Collection {
  protected async onBidsUpdate() {
    if (!this.bidLevels[0] || !this.bidLevels[1] || this.volume.day === undefined) {
      this.logger.info({ volume: this.volume }, 'Not enough liquidity')
      await this.removeBid()
      return
    }

    const target = new Decimal(this.volume.day).div(this.bidLevels[0].price).mul(strategy.dailyMul)
    const skipped: BidLevel[] = []

    for (const [i, level] of this.bidLevels.entries()) {
      if (i === 0) {
        skipped.push(level)
        continue
      }

      if (getDepth(skipped).gt(target)) {
        const balance = await getBalance()
        const size = new Decimal(balance).dividedToIntegerBy(level.price).toNumber()

        if (level.price !== this.bid?.price || size !== this.bid?.size) {
          await this.removeBid()

          this.logger.warn({ balance, size, target, price: level.price }, 'New bid is calculated')

          await this.placeBid(level.price, size)
        }

        break
      } else {
        skipped.push(level)
      }
    }
  }
}

function getDepth(bidLevels: BidLevel[]): Decimal {
  let total = new Decimal(0)

  for (const level of bidLevels) {
    total = total.add(level.executableSize)
  }

  return total
}
