import { FunctionComponent } from 'react'
import { personalModel } from '../models/personal.model'
import { CardGrid } from './cardGrid'
import { PersonalItem } from './personalItem'
import { Anchors, Section } from './section'

export const Personal: FunctionComponent = () => (
  <Section title={Anchors.Personal}>
    <CardGrid numOfCells={2}>
      {personalModel.items.map(item => (
        <PersonalItem key={item.title} item={item} />
      ))}
    </CardGrid>
  </Section>
)
