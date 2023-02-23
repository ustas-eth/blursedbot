import type { Page, Target } from 'puppeteer'
import { password, seed } from '../config.js'
import { browser } from './puppeteer.js'

export async function init() {
  const bgPageTarget = await browser.waitForTarget((target) => target.type() === 'background_page')
  const tallyhoId = bgPageTarget.url().split('/')[2]!

  const page = await browser.newPage()
  await page.goto(`chrome-extension://${tallyhoId}/popup.html`)

  if (await page.$('text/Welcome to Tally Ho!')) {
    await page.waitForSelector('button.large')
    await page.click('button.large')
    await page.click('button.large')
    await page.click('button.jsx-215754567')

    const passInput = await page.$$('input.jsx-1637087302')
    await passInput[0]?.type(password)
    await passInput[1]?.type(password)
    await page.click('button.large')

    await page.waitForSelector('textarea')
    await page.type('textarea', seed)
    await page.click('button.jsx-215754567')
  } else {
    await page.click('div.avatar')
    await page.waitForSelector('button.signing_btn')
    await page.$eval('button.signing_btn', (button) => button.click())
    await page.type('#signing_password', password)
    await page.$eval('button.large', (button) => button.click())
  }

  await page.close()

  browser.on('targetcreated', async (target: Target) => {
    const url = target.url()
    const page = await target.page()

    if (page) {
      switch (url) {
        case `chrome-extension://${tallyhoId}/popup.html?page=/dapp-permission`:
          givePermission(page)
          break
        case `chrome-extension://${tallyhoId}/popup.html?page=/personal-sign`:
          sign(page)
          break
      }
    }
  })
}

async function givePermission(page: Page) {
  await page.waitForSelector('text/Connect')
  await page.click('button.large:not(.secondary)')
}

async function sign(page: Page) {
  await page.waitForSelector('text/Sign')
  await page.click('button.large:not(.secondary)')
}
