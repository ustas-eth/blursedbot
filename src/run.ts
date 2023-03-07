import { blur, timings } from './config.js'
import { init } from './libs/tallyho.js'
import { login } from './Blur/login.js'
import { delay } from './libs/utils.js'
import { randomInt } from 'crypto'
import { BasicStrategyCollection } from './Blur/strategies/basic.js'

await init()
await login()

for (const { name, address } of blur.collections) {
  const collection = new BasicStrategyCollection(name, address)
  collection.openCollection()
  await delay(randomInt(timings.start.min, timings.start.max))
}
