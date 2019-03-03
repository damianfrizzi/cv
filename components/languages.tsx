import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Card } from './card'
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: var(--default-padding);

  @media (min-width: 940px), print {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Languages: FunctionComponent = () => (
  <Section title={Anchors.Languages}>
    <Wrapper>
      {items.map(language => (
        <Card key={language.title}>
          <h2>{language.title}</h2>
          <small>{language.proficiency}</small>
        </Card>
      ))}
    </Wrapper>
  </Section>
)
