import { FunctionComponent } from 'react'
import { languageModel } from '../models/language.model'
import { Card } from './card'
import { CardGrid } from './cardGrid'
import { Anchors, Section } from './section'

export const Languages: FunctionComponent = () => (
  <Section title={Anchors.Languages}>
    <CardGrid numOfCells={4}>
      {languageModel.items.map(language => (
        <Card key={language.title}>
          <h2>{language.title}</h2>
          <small>{language.proficiency}</small>
        </Card>
      ))}
    </CardGrid>
  </Section>
)
