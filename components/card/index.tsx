import { FunctionComponent } from 'react'
import styles from './styles.css'

export const Card: FunctionComponent = ({ children }) => <div className={styles.card}>{children}</div>
