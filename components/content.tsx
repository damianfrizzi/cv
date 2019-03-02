import { FunctionComponent } from 'react'
import { Education } from './education'
import { Experience } from './experience'
import { Languages } from './languages'
import { Personal } from './personal'
import { PrintBreakBefore } from './print'
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
