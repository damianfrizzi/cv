import { FunctionComponent } from 'react'
import { skillsModel } from '../models/skills.model'
import { CardGrid } from './cardGrid'
import { Anchors, Section } from './section'
import { Skill } from './skill'

export const Skills: FunctionComponent = () => (
  <Section title={Anchors.Skills}>
    <CardGrid numOfCells={2}>
      {skillsModel.items.map(skill => (
        <Skill key={skill.category} skill={skill} />
      ))}
    </CardGrid>
  </Section>
)
