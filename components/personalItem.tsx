import { FunctionComponent } from 'react'
import { Card } from './card'
import { IPersonalItem } from './personal'
import styles from './personalItem.css'

interface IPersonalItemProps {
  item: IPersonalItem
}

export const PersonalItem: FunctionComponent<IPersonalItemProps> = ({ item }) => (
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
