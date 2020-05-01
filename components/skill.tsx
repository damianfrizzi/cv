import { PrismicDocument, PrismicSkill } from 'lib/prismic/types'
import { FC } from 'react'
import styled from 'styled-components'
import { Card } from './card'

interface SkillProps {
  skill: PrismicDocument<PrismicSkill>
}

const ExpertiseWrapper = styled.div`
  height: 6px;
  margin: 12px 0;
  background: #ddd;
`

const Expertise = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.primaryColor};
`

const Small = styled.small`
  margin-right: ${({ theme }) => theme.spacing(3)};
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

export const Skill: FC<SkillProps> = ({ skill: { data } }) => (
  <Card>
    <h2>{data.title}</h2>

    <ExpertiseWrapper aria-label={`${data.progress}% out of 100%`}>
      <Expertise style={{ width: `${data.progress}%` }} />
    </ExpertiseWrapper>

    {data.profficiency && data.profficiency.length > 0 && (
      <Paragraph>
        <Small>Profficiency:</Small>
        <Span>{data.profficiency.map(p => p.skill).join(', ')}</Span>
      </Paragraph>
    )}

    {data.basics && data.basics?.length > 0 && (
      <Paragraph>
        <Small>Basics:</Small>
        <Span>{data.basics.map(b => b.skill).join(', ')}</Span>
      </Paragraph>
    )}
  </Card>
)
