import { GlobalStyle } from 'components/globalStyle'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../theme'

const Wrapper = styled.div`
  background: #f6f7f8;
`

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Head>
          <title>Damian Frizzi - Frontend Engineer</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
