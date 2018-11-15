import { PureComponent, ReactNode } from 'react'
import Card from '../../../card'
import styles from './styles.css'
import { IPersonalItemProps } from './types'

export default class PersonalItem extends PureComponent<IPersonalItemProps> {
  public render(): ReactNode {
    const { item } = this.props

    return (
      <Card>
        <div className={styles.item}>
          <img src={item.image} width={90} height={90} alt={item.alt} />

          <div>
            <h2>{item.title}</h2>
            {item.paragraphs.map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Card>
    )
  }
}
