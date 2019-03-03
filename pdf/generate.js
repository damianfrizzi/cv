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
    return await getFromFileSystem(path)
  } catch (err) {
    console.log(err)
    return await getFromBrowser(url, path, launchOptions)
  }
}

/** @param {string} path */
const getFromFileSystem = path => {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err || !stats.isFile) {
        reject(err.message)
      } else {
        const lastModified = (new Date().getTime() - new Date(stats.mtime).getTime()) / 1000

        if (stats.isFile && lastModified <= fileSystemCacheTTL) {
          fs.readFile(path, (err, data) => {
            if (err) {
              reject(err.message)
            }

            resolve(data)
          })
        } else {
          reject('cache miss')
        }
      }
    })
  })
}

/**
 * @param {string} url
 * @param {string} [path]
 * @param {ILaunchOptions} [launchOptions]
 */
const getFromBrowser = async (url, path, launchOptions) => {
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

module.exports = { genreatePdf }
