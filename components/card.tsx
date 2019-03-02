import { FunctionComponent } from 'react'
import styles from './card.css'

export const Card: FunctionComponent = ({ children }) => <div className={styles.card}>{children}</div>
