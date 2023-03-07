import type { Page } from 'puppeteer'
import { logger } from '../../libs/logs.js'
import { delay } from '../../libs/utils.js'

export async function blurApiRequest(page: Page, uri: string, body: string, attempt: number = 1): Promise<any> {
  return await page.evaluate(
    async (uri, body) => {
      const response = await fetch(uri, {
        headers: {
          accept: '*/*',
          'accept-language': 'en-US,en;q=0.9',
          'content-type': 'application/json',
          'sec-ch-ua': '"Google Chrome";v="111", " Not;A Brand";v="99", "Chromium";v="111"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
        },
        referrer: 'https://blur.io/',
        referrerPolicy: 'strict-origin-when-cross-origin',
        mode: 'cors',
        body,
        method: 'POST',
        credentials: 'include',
      })

      try {
        const json = await response.json()
        return json
      } catch (error) {
        logger.error(error)
        await delay(2000 * attempt)
        return blurApiRequest(page, uri, body)
      }
    },
    uri,
    body
  )
}
