import Document, { DocumentContext, DocumentInitialProps, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  public render(): JSX.Element {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta content="CV of Frontend Engineer Damian Frizzi" name="description" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <meta name="theme-color" content="#487eb0" />
          <link href="/static/manifest.json" rel="manifest" />
          <link rel="shortcut icon" href="/static/images/favicon.ico?v=1" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/static/images/pwa-192.png" />
          <script dangerouslySetInnerHTML={{ __html: checkForWebPSupport }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

// This checks for webp support and adds a class "webp" or "no-webp" to the html element
const checkForWebPSupport = `document.querySelectorAll("html")[0].classList.add(document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0 ?"webp":"no-webp");`
