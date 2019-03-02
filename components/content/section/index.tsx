import { FunctionComponent } from 'react'
import styles from './styles.css'
import { ISectionProps } from './types'

export const Section: FunctionComponent<ISectionProps> = ({ children, title }) => (
  <div className={`container ${styles.section}`}>
    <h2 id={title} className={styles.title}>
      {title}
    </h2>

    {children}
  </div>
)
