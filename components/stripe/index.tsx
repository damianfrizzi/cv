import classNames from 'classnames'
import { FunctionComponent } from 'react'
import styles from './styles.css'
import { IStripeProps } from './types'

export enum Stripes {
  Top,
  Bottom
}

export const Stripe: FunctionComponent<IStripeProps> = ({ position }) => (
  <div
    className={classNames(styles.stripe, {
      [styles.stripeTop]: position === Stripes.Top,
      [styles.stripeBottom]: position === Stripes.Bottom
    })}
  />
)
