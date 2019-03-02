import { FunctionComponent } from 'react'
import { PrintBreakBefore } from '../print/breakbefore'
import { Education } from './education'
import { Experience } from './experience'
import { Languages } from './languages'
import { Personal } from './personal'
import { Skills } from './skills'

export const Content: FunctionComponent = () => (
  <main>
    <Experience />
    <PrintBreakBefore />
    <Education />
    <Skills />
    <PrintBreakBefore />
    <Languages />
    <Personal />
  </main>
)
