import { PrismicDocument, PrismicSkill } from 'lib/prismic/types'
import { FC, Fragment } from 'react'
import styled from 'styled-components'
import { CardGrid } from './cardGrid'
import { PrintBreakBefore } from './print'
import { Anchors, Section } from './section'
import { Skill } from './skill'

const printBreakAfter = [3]

const PrintWrapper = styled.div`
  display: none;

  @media print {
    display: block;
    height: 150px;
    grid-column: 2;
  }
`

interface SkillsProps {
  skills: Array<PrismicDocument<PrismicSkill>>
}

export const Skills: FC<SkillsProps> = ({ skills }) => (
  <Section title={Anchors.Skills}>
    <CardGrid numOfCells={2}>
      {skills.map((skill, i) => (
        <Fragment key={skill.id}>
          <Skill skill={skill} />
          {printBreakAfter.includes(i) && (
            <PrintWrapper>
              <PrintBreakBefore />
            </PrintWrapper>
          )}
        </Fragment>
      ))}
    </CardGrid>
  </Section>
)
