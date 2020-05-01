import { PrismicDocument, PrismicPosition } from 'lib/prismic/types'
import { FC } from 'react'
import styled from 'styled-components'
import { Anchors, Section } from './section'
import { Timeline } from './timeline'

const Wrapper = styled.div`
  ul {
    position: relative;
    list-style: none;
    margin-left: 0;
    padding-left: 1.2em;

    li {
      @media print {
        padding: 0;
      }

      &::before {
        content: '-';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.primaryColor};
      }
    }
  }
`

interface ExperienceProps {
  positions: Array<PrismicDocument<PrismicPosition>>
}

export const Experience: FC<ExperienceProps> = ({ positions }) => (
  <Wrapper>
    <Section title={Anchors.Experience}>
      <Timeline items={positions} />
    </Section>
  </Wrapper>
)
