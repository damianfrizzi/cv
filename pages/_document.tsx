import Document, { DefaultDocumentIProps, Head, Main, NextDocumentContext, NextScript } from 'next/document'
import { ReactNode } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class CustomDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext): Promise<DefaultDocumentIProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  public render(): ReactNode {
    return (
      <html lang="en">
        <Head>
          <meta content="Website built with Next.js which can be exported as a pdf." name="description" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
