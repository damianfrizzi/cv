import { FunctionComponent } from 'react'
import { Anchors } from './enums'
import styles from './section.css'

interface ISectionProps {
  title: Anchors
}

export const Section: FunctionComponent<ISectionProps> = ({ children, title }) => (
  <div className={`container ${styles.section}`}>
    <h2 id={title} className={styles.title}>
      {title}
    </h2>

    {children}
  </div>
)
