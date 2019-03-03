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
    margin-bottom: -24px;
  }

  @media print {
    height: 240px;
  }

  ${(props: IStripeProps) =>
    props.position === Stripes.Top &&
    `@media (min-width: 940px), screen {
      height: 330px;
    }`}

  ${(props: IStripeProps) =>
    props.position === Stripes.Bottom &&
    `@media (min-width: 940px), print {
      transform-origin: -100%;
      height: 150px;
    }`}
`

export const Stripe: FunctionComponent<IStripeProps> = ({ position }) => <StripeItem position={position} />
