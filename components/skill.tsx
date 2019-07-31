import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { ISkillItem } from '../models/skills.model'
import { Card } from './card'

interface ISkillProps {
  skill: ISkillItem
}

const ExpertiseWrapper = styled.div`
  height: 6px;
  margin: 12px 0;
  background: #ddd;
`

const Expertise = styled.div`
  height: 100%;
  background: ${props => props.theme.primaryColor};
`

const Small = styled.small`
  margin-right: ${props => props.theme.defaultPadding};
  width: 30%;
`

const Span = styled.span`
  width: 70%;
`

const Paragraph = styled.p`
  @media (min-width: 940px), print {
    display: flex;
    align-items: baseline;
  }
`

export const Skill: FunctionComponent<ISkillProps> = ({ skill }) => (
  <Card>
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
  </Card>
)
