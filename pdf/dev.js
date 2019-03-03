// @ts-check
const { genreatePdf } = require('./generate')

/**
 * Go to chrome://version/ and check executablePath
 * @type {import('puppeteer-core').LaunchOptions} ILaunchOptions
 */
const launchOptions = {
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true
}
;(async function() {
  try {
    const url = 'http://localhost:3000'
    await genreatePdf(url, './pdf/dev.pdf', launchOptions)
  } catch (e) {
    console.error(e.message)
  }
})()
