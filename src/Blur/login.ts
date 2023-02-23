import { logger } from '../libs/logs.js'
import { browser } from '../libs/puppeteer.js'

export async function login() {
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 720 })
  await page.goto('https://blur.io/portfolio/bids')

  await page.evaluate(() => {
    window.localStorage.setItem('blur.persona.onboarded', 'true')
    window.localStorage.setItem('blur.whatsNew.lastId', '1000')
    window.localStorage.setItem('blur.wallet.intro', 'true')
  })

  const connect = await page.$('text/connect wallet')
  if (connect) {
    await page.evaluate((e) => e.click(), await connect.toElement('div'))
    await page.click('#METAMASK')

    logger.info('Logged into Blur')
  }

  await page.close()
}
