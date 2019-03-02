import Head from 'next/head'
import { PureComponent, ReactNode } from 'react'
import Header from '../header'
import './patterns.css'
import styles from './styles.css'

export default class Layout extends PureComponent {
  public render(): ReactNode {
    return (
      <div className={styles.layout}>
        <Head>
          <title>Damian Frizzi - Frontend Engineer</title>
        </Head>
        <Header />
      </div>
    )
  }
}
