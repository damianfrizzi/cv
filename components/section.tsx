import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Anchors } from './enums'

interface ISectionProps {
  title: Anchors
}

const Container = styled.div`
  position: relative;
  padding-bottom: 24px;
`

const Title = styled.h2`
  padding: 3rem 0;
`

export const Section: FunctionComponent<ISectionProps> = ({ children, title }) => (
  <Container className="container">
    <Title>{title}</Title>
    {children}
  </Container>
)
