import { CAPTCHA_KEY, DEBUG } from '../config.js'
import path from 'path'
import { executablePath } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import RecaptchaPlugin from 'puppeteer-extra-plugin-recaptcha'

puppeteer.use(StealthPlugin())
if (CAPTCHA_KEY.length !== 0)
  puppeteer.use(
    RecaptchaPlugin({
      provider: {
        id: '2captcha',
        token: CAPTCHA_KEY,
      },
    })
  )

export const browser = await puppeteer.launch({
  executablePath: executablePath(),
  headless: false,
  ignoreDefaultArgs: ['--disable-extensions'],
  args: [`--load-extension=${path.join(process.cwd(), './tallyho')}`, '--start-maximized'],
  userDataDir: './chromedata',
  devtools: DEBUG,
})
