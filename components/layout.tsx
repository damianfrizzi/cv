import Head from 'next/head'
import { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import { Content } from './content'
import { GlobalStyle } from './globalStyle'
import { Header } from './header'
import { Stripe, Stripes } from './stripe'

const Wrapper = styled.div`
  background: #f6f7f8;
`

export const Layout: FC = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Head>
        <title>Damian Frizzi - Frontend Engineer</title>
      </Head>
      <GlobalStyle />
      <Stripe position={Stripes.Top} />
      <Header />
      <Content />
      <Stripe position={Stripes.Bottom} />
    </Wrapper>
  </ThemeProvider>
)
