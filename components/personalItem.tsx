import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { IPersonalItem } from '../models/personal.model'
import { Card } from './card'
import { CardGrid } from './cardGrid'

interface IPersonalItemProps {
  item: IPersonalItem
}

const Image = styled.img`
  display: block;
  margin: 0 auto 1rem;
`

export const PersonalItem: FunctionComponent<IPersonalItemProps> = ({ item }) => (
  <Card>
    <CardGrid numOfCells="auto">
      <Image src={item.image} width={90} height={90} alt={item.alt} />

      <div>
        <h2>{item.title}</h2>
        {item.paragraphs.map((paragraph: string, i: number) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </CardGrid>
  </Card>
)
