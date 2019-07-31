import { FunctionComponent } from 'react'
import styled from 'styled-components'

const CardItem = styled.div`
  padding: var(--default-padding);
  margin: 0 var(--default-negative-padding);
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  @media (min-width: 940px), print {
    margin: 0;
    border-radius: 5px;
  }

  h2 small {
    margin-top: 1rem;

    @media (min-width: 940px), print {
      margin: 0;
    }
  }

  small {
    display: block;
    margin: 0.25rem 0;

    @media (min-width: 940px), print {
      display: initial;
      margin: 0;
    }
  }
`

export const Card: FunctionComponent = ({ children }) => <CardItem>{children}</CardItem>
