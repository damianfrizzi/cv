// @ts-check
const { genreatePdf } = require('./generate')

module.exports = /**
 * @param {import('http').IncomingMessage} _req
 * @param {import('http').ServerResponse} res
 */ async function(_req, res) {
  try {
    const url = 'https://dafri.io'
    const file = await genreatePdf(url)

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/pdf')
    res.end(file)
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Server Error</h1><p>Sorry, there was a problem</p>')
    console.error(e.message)
  }
}
