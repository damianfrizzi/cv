import { FC } from 'react'
import styled from 'styled-components'

export enum Stripes {
  Top,
  Bottom
}

interface IStripeProps {
  position: Stripes
}

const StripeItem: FC<IStripeProps> = styled.div`
  display: none;

  @media (min-width: 940px), print {
    display: block;
    width: 100%;
    overflow: hidden;
    transform: skewY(2deg);
    background: #fff;
    margin-top: ${({ theme }) => theme.spacing(-4)};
    margin-bottom: ${({ theme }) => theme.spacing(-3)};
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

export const Stripe: FC<IStripeProps> = ({ position }) => <StripeItem position={position} />
