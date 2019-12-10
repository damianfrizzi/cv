import chrome from 'chrome-aws-lambda'
import { NextApiRequest, NextApiResponse } from 'next'
import puppeteer, { LaunchOptions, PDFOptions } from 'puppeteer-core'

type Environments = 'development' | 'production' | 'test'
type EnvironmentConfigs = {
  [key in Environments]: EnvironmentConfig
}
interface EnvironmentConfig {
  url: string
  path?: string
  launchOptions?: LaunchOptions
}

const options: EnvironmentConfigs = {
  development: {
    url: 'http://localhost:3000',
    path: './dev.pdf',
    launchOptions: {
      // Go to chrome://version/ and check executablePath
      // executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless: true
    }
  },
  production: { url: 'https://dafri.io' },
  test: { url: 'https://dafri.io' }
}

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const currentOption = options[process.env.NODE_ENV]

  try {
    const file = await genreatePdf(currentOption)

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

const genreatePdf = async ({ url, path, launchOptions }: EnvironmentConfig) => {
  const browser = await puppeteer.launch(
    launchOptions || {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless
    }
  )
  const page = await browser.newPage()

  const config: PDFOptions = {
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
