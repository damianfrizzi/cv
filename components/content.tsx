import { FunctionComponent } from 'react'
import { Education } from './education'
import { Experience } from './experience'
import { Languages } from './languages'
import { Skills } from './skills'

export const Content: FunctionComponent = () => (
  <main>
    <Experience />
    <Education />
    <Skills />
    <Languages />
  </main>
)
