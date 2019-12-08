import { FunctionComponent } from 'react'
import styled from 'styled-components'

export enum Anchors {
  Experience = 'Experience',
  Education = 'Education',
  Skills = 'Technologies and Skills',
  Languages = 'Languages',
  Personal = 'Personal'
}

interface ISectionProps {
  title: Anchors
}

const Container = styled.div`
  position: relative;
  padding-bottom: ${props => props.theme.spacing(3)};
`

const Title = styled.h2`
  padding: ${props => `${props.theme.spacing(6)} 0 0`};
`

export const Section: FunctionComponent<ISectionProps> = ({ children, title }) => (
  <Container className="container">
    <Title>{title}</Title>
    {children}
  </Container>
)
