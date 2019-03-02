import { PureComponent, ReactNode } from 'react'
import Personal from './personal'

export default class Content extends PureComponent {
  public render(): ReactNode {
    return (
      <main>
        <Personal />
      </main>
    )
  }
}
