// @ts-check
const { genreatePdf } = require('./generate')

/** @type {import('puppeteer-core').LaunchOptions} ILaunchOptions */
const launchOptions = {
  // Go to chrome://version/ and check executablePath
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true
}
;(async function() {
  try {
    const url = 'http://localhost:3000'
    await genreatePdf(url, launchOptions)
  } catch (e) {
    console.error(e.message)
  }
})()
