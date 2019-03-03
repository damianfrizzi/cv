import { ISkill } from 'components/skills'
import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Card } from './card'

interface ISkillProps {
  skill: ISkill
}

const ExpertiseWrapper = styled.div`
  height: 6px;
  margin: 12px 0;
  background: #ddd;
`

const Expertise = styled.div`
  height: 100%;
  background: var(--primary-color);
`

const Small = styled.small`
  margin-right: var(--default-padding);
  width: 30%;
`

const Span = styled.span`
  width: 70%;
`

const Paragraph = styled.p`
  display: flex;
  align-items: baseline;
`

export const Skill: FunctionComponent<ISkillProps> = ({ skill }) => (
  <Card>
    <>
      <h2>{skill.category}</h2>

      <ExpertiseWrapper aria-label={`${skill.expertise}% out of 100%`}>
        <Expertise style={{ width: `${skill.expertise}%` }} />
      </ExpertiseWrapper>

      {skill.keywordsProficient && (
        <Paragraph>
          <Small>Profficiency:</Small>
          <Span>{skill.keywordsProficient.join(', ')}</Span>
        </Paragraph>
      )}

      {skill.keywordsBasic && (
        <Paragraph>
          <Small>Basics:</Small>
          <Span>{skill.keywordsBasic.join(', ')}</Span>
        </Paragraph>
      )}
    </>
  </Card>
)