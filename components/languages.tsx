import { PrismicDocument, PrismicLanguage } from 'lib/prismic/types'
import { FC } from 'react'
import { Card } from './card'
import { CardGrid } from './cardGrid'
import { Anchors, Section } from './section'

interface LanguagesProps {
  languages: Array<PrismicDocument<PrismicLanguage>>
}

export const Languages: FC<LanguagesProps> = ({ languages }) => (
  <Section title={Anchors.Languages}>
    <CardGrid numOfCells={4}>
      {languages
        .sort(a => (a.data.skill_level === 'Native' ? -1 : 1))
        .map(language => (
          <Card key={language.id}>
            <h2>{language.data.title}</h2>
            <small>{language.data.skill_level}</small>
          </Card>
        ))}
    </CardGrid>
  </Section>
)
