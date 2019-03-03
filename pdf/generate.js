// @ts-check
const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core')

/**
 * @param {string} url
 * @param {string} [path]
 */
const genreatePdf = async (url, path) => {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless
  })
  const page = await browser.newPage()

  /** @type {import('puppeteer-core').PDFOptions} */
  const config = {
    format: 'A4',
    printBackground: true
  }

  if (path) {
    config.path = path
  }

  await page.goto(url, { waitUntil: 'networkidle2' })
  const file = await page.pdf(config)

  await browser.close()
  return file
}

module.exports = { genreatePdf }
