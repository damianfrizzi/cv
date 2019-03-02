import { PureComponent, ReactNode } from 'react'
import Card from '../../../card'
import styles from './styles.css'
import { IPersonalItemProps } from './types'

export default class PersonalItem extends PureComponent<IPersonalItemProps> {
  public render(): ReactNode {
    return (
      <Card>
        <div className={styles.item}>
          <div>
            <h2>Frontend Web Developer</h2>

            <p>Sehr geehrte Frau Mächler</p>
            <p>as</p>
          </div>
        </div>
      </Card>
    )
  }
}
