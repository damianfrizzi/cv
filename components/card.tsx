import { FunctionComponent } from 'react'
import styled from 'styled-components'

const CardItem = styled.div`
  padding: var(--default-padding);
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
  border-radius: 5px;
`

export const Card: FunctionComponent = ({ children }) => <CardItem>{children}</CardItem>
