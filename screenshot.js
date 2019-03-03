const chrome = require('chrome-aws-lambda')
const puppeteer = require('puppeteer-core')

/**
 * @param {string} url
 */
async function getPdf(url) {
  const browser = await puppeteer.launch({
    args: chrome.args,
    executablePath: await chrome.executablePath,
    headless: chrome.headless
  })

  const page = await browser.newPage()

  await page.goto(url, { waitUntil: 'networkidle2' })
  const file = await page.pdf({
    format: 'A4',
    printBackground: true
  })

  await browser.close()
  return file
}

module.exports = /**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */ async function(req, res) {
  try {
    const url = 'https://dafri.io'
    const file = await getPdf(url)
    res.statusCode = 200
    res.setHeader('Content-Type', `application/pdf`)
    res.setHeader('Cache-Control', 'max-age=3600')
    res.end(file)
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Server Error</h1><p>Sorry, there was a problem</p>')
    console.error(e.message)
  }
}
