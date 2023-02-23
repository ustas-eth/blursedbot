import { blur } from './config.js'
import { init } from './libs/tallyho.js'
import { login } from './Blur/login.js'
import { BasicStrategyCollection } from './Blur/strategies/basic.js'

await init()
await login()

for (const { name, address } of blur.collections) {
  const collection = new BasicStrategyCollection(name, address)
  collection.openCollection()
}
