import { FunctionComponent } from 'react'
import { Card } from './card'
import { Anchors, LanguageProficiencies } from './enums'
import styles from './languages.css'
import { Section } from './section'

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
    <div className={styles.languagesWrapper}>
      {items.map(language => (
        <Card key={language.title}>
          <h2>{language.title}</h2>
          <small>{language.proficiency}</small>
        </Card>
      ))}
    </div>
  </Section>
)
