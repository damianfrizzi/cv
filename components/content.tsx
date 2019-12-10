import { FC } from 'react'
import { Education } from './education'
import { Experience } from './experience'
import { Languages } from './languages'
import { Skills } from './skills'

export const Content: FC = () => (
  <main>
    <Experience />
    <Education />
    <Skills />
    <Languages />
  </main>
)
