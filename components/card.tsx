import { FC } from 'react'
import styles from './card.module.scss'

export const Card: FC = ({ children }) => <div className={styles.card}>{children}</div>
