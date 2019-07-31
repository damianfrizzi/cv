import Document, { DocumentContext, DocumentInitialProps, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class CustomDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
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

  public render(): JSX.Element {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta content="CV of Frontend Engineer Damian Frizzi as a static website or PDF" name="description" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <meta name="theme-color" content="#e74c3c" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&amp;display=swap" rel="stylesheet" />
          <link href="/static/manifest.json" rel="manifest" />
          <link rel="shortcut icon" href="/static/images/favicon.ico" type="image/x-icon" />
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
const checkForWebPSupport = `var webPsupport=function(){var A=new Image;A.onload=WebP.onerror=function(){callback(2==A.height)},A.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"};document.querySelectorAll("html")[0].classList.add(webPsupport?"webp":"no-webp");`
