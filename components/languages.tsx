import { FunctionComponent } from 'react'
import { Card } from './card'
import { CardGrid } from './cardGrid'
import { Anchors, Section } from './section'

enum LanguageProficiencies {
  Native = 'Native Language',
  Fluent = 'Fluent',
  Intermediate = 'Intermediate'
}

export interface ILanguage {
  title: string
  proficiency: LanguageProficiencies
}

const items: ILanguage[] = [
  {
    title: 'German',
    proficiency: LanguageProficiencies.Native
  },
  {
    title: 'English',
    proficiency: LanguageProficiencies.Fluent
  },
  {
    title: 'French',
    proficiency: LanguageProficiencies.Intermediate
  },
  {
    title: 'Italian',
    proficiency: LanguageProficiencies.Intermediate
  }
]

export const Languages: FunctionComponent = () => (
  <Section title={Anchors.Languages}>
    <CardGrid numOfCells={4}>
      {items.map(language => (
        <Card key={language.title}>
          <h2>{language.title}</h2>
          <small>{language.proficiency}</small>
        </Card>
      ))}
    </CardGrid>
  </Section>
)
