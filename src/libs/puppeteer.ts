import { DEBUG } from '../config.js'
import path from 'path'
import { executablePath } from 'puppeteer'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

puppeteer.use(StealthPlugin())

export const browser = await puppeteer.launch({
  executablePath: executablePath(),
  headless: false,
  ignoreDefaultArgs: ['--disable-extensions'],
  args: [`--load-extension=${path.join(process.cwd(), './tallyho')}`, '--start-maximized'],
  userDataDir: './chromedata',
  devtools: DEBUG,
})
