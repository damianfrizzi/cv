import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { experienceModel } from '../models/experience.model'
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
        color: ${props => props.theme.primaryColor};
      }
    }
  }
`

export const Experience: FunctionComponent = () => (
  <Wrapper>
    <Section title={Anchors.Experience}>
      <Timeline items={experienceModel.items} />
    </Section>
  </Wrapper>
)
