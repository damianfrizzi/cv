import Head from 'next/head'
import { FunctionComponent } from 'react'
import { Content } from './content'
import { Header } from './header'
import styles from './layout.css'
import { Stripe, Stripes } from './stripe'

export const Layout: FunctionComponent = () => (
  <div className={styles.layout}>
    <Head>
      <title>Damian Frizzi - Frontend Engineer</title>
    </Head>
    <Stripe position={Stripes.Top} />
    <Header />
    <Content />
    <Stripe position={Stripes.Bottom} />
  </div>
)
