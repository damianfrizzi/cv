import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Card } from './card'
import { IPersonalItem } from './personal'

interface IPersonalItemProps {
  item: IPersonalItem
}

const Item = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: var(--default-padding);
`

export const PersonalItem: FunctionComponent<IPersonalItemProps> = ({ item }) => (
  <Card>
    <Item>
      <img src={item.image} width={90} height={90} alt={item.alt} />

      <div>
        <h2>{item.title}</h2>
        {item.paragraphs.map((paragraph: string, i: number) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Item>
  </Card>
)