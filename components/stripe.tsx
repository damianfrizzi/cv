import classNames from 'classnames'
import { FC } from 'react'
import styles from './stripe.module.scss'

export enum Stripes {
  Top,
  Bottom
}

interface StripeProps {
  position: Stripes
}

export const Stripe: FC<StripeProps> = ({ position }) => (
  <div className={classNames(styles.stripe, { [styles.stripeTop]: position === Stripes.Top, [styles.stripeBottom]: position === Stripes.Bottom })} />
)
