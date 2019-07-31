import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { IPersonalItem } from '../models/personal.model'
import { Card } from './card'

interface IPersonalItemProps {
  item: IPersonalItem
}

// TODO
const Item = styled.div`
  img {
    display: block;
    margin: 0 auto 1rem;
  }

  @media (min-width: 940px), print {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: var(--default-padding);
  }
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
