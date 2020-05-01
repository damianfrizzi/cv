import classNames from 'classnames'
import { FC } from 'react'
import styles from './cardGrid.module.scss'

interface ICardGridsProps {
  numOfCells?: 1 | 2 | 3 | 4 | 'auto'
}

export const CardGrid: FC<ICardGridsProps> = ({ children, numOfCells = 1 }) => (
  <div
    className={classNames(styles.cardGrid, {
      [styles.twoCells]: numOfCells === 2,
      [styles.threeCells]: numOfCells === 3,
      [styles.fourCells]: numOfCells === 4,
      [styles.autoCells]: numOfCells === 'auto'
    })}
  >
    {children}
  </div>
)
