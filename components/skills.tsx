import { FC, Fragment } from 'react'
import styled from 'styled-components'
import { skillsModel } from '../models/skills.model'
import { CardGrid } from './cardGrid'
import { PrintBreakBefore } from './print'
import { Anchors, Section } from './section'
import { Skill } from './skill'

const printBreakAfter = [5]

const PrintWrapper = styled.div`
  display: none;

  @media print {
    display: block;
    height: 150px;
    grid-column: 2;
  }
`

export const Skills: FC = () => (
  <Section title={Anchors.Skills}>
    <CardGrid numOfCells={2}>
      {skillsModel.items.map((skill, i) => (
        <Fragment key={skill.category}>
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
