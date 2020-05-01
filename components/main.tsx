import { FC } from 'react'
import styles from './main.module.scss'

export const Main: FC = ({ children }) => <main className={styles.main}>{children}</main>
