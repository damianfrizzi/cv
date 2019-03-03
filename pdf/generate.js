// @ts-check
const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core')

/**
 * @typedef {import('puppeteer-core').LaunchOptions} ILaunchOptions
 * @param {string} url
 * @param {string} [path]
 * @param {ILaunchOptions} [launchOptions]
 */
const genreatePdf = async (url, path, launchOptions) => {
  const browser = await puppeteer.launch(
    launchOptions || {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless
    }
  )
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
