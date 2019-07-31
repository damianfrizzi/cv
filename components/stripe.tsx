import { FunctionComponent } from 'react'
import styled from 'styled-components'

export enum Stripes {
  Top,
  Bottom
}

interface IStripeProps {
  position: Stripes
}

const StripeItem: FunctionComponent<IStripeProps> = styled.div`
  display: none;

  @media (min-width: 940px), print {
    display: block;
    width: 100%;
    overflow: hidden;
    transform: skewY(2deg);
    background: #fff;
    margin-top: ${props => props.theme.spacing(-4)};
    margin-bottom: ${props => props.theme.spacing(-3)};
  }

  @media print {
    height: 260px;
  }

  ${(props: IStripeProps) =>
    props.position === Stripes.Top &&
    `@media (min-width: 940px), screen {
      height: 342px;
    }`}

  ${(props: IStripeProps) =>
    props.position === Stripes.Bottom &&
    `@media (min-width: 940px), print {
      transform-origin: -100%;
      height: 150px;
    }`}
`

export const Stripe: FunctionComponent<IStripeProps> = ({ position }) => <StripeItem position={position} />
