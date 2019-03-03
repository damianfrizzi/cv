// @ts-check
const fs = require('fs')
const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core')

const fileSystemCacheTTL = 3600 // seconds
const pathOnFileSystem = '/tmp/pdf/dev.pdf'

/**
 * @typedef {import('puppeteer-core').LaunchOptions} ILaunchOptions
 * @param {string} url
 * @param {string} [path]
 * @param {ILaunchOptions} [launchOptions]
 */
const genreatePdf = async (url, path = pathOnFileSystem, launchOptions) => {
  try {
    const stats = fs.statSync(path)
    const lastModified = (new Date().getTime() - new Date(stats.mtime).getTime()) / 1000

    if (stats.isFile && lastModified <= fileSystemCacheTTL) {
      const file = fs.readFileSync(path)
      return file
    } else {
      throw 'Cache miss'
    }
  } catch (_err) {
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
      path,
      printBackground: true
    }

    await page.goto(url, { waitUntil: 'networkidle2' })
    const file = await page.pdf(config)

    await browser.close()
    return file
  }
}

module.exports = { genreatePdf }
