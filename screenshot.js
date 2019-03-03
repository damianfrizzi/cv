const { getScreenshot } = require('./chromium')

module.exports = /**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */ async function(req, res) {
  try {
    const type = 'png'
    const url = 'https://dafri.io'
    const file = await getScreenshot(url, type, undefined, undefined)
    res.statusCode = 200
    res.setHeader('Content-Type', `image/${type}`)
    res.end(file)
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Server Error</h1><p>Sorry, there was a problem</p>')
    console.error(e.message)
  }
}
