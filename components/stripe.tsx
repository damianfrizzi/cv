import classNames from 'classnames'
import { FunctionComponent } from 'react'
import styles from './stripe.css'

export enum Stripes {
  Top,
  Bottom
}

interface IStripeProps {
  position: Stripes
}

export const Stripe: FunctionComponent<IStripeProps> = ({ position }) => (
  <div
    className={classNames(styles.stripe, {
      [styles.stripeTop]: position === Stripes.Top,
      [styles.stripeBottom]: position === Stripes.Bottom
    })}
  />
)
