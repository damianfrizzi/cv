import { PureComponent, ReactNode } from 'react'
import styles from './styles.css'
import { ISectionProps } from './types'

export default class Section extends PureComponent<ISectionProps> {
  public render(): ReactNode {
    const { children, title } = this.props

    return <div className={`container ${styles.section}`}>{children}</div>
  }
}
