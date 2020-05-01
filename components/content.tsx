import { PrismicDocument, PrismicPosition } from 'lib/prismic/types'
import { FC } from 'react'
import { Education } from './education'
import { Experience } from './experience'
import { Languages } from './languages'
import { Skills } from './skills'

interface ContentProps {
  positions: Array<PrismicDocument<PrismicPosition>>
}

export const Content: FC<ContentProps> = ({ positions }) => (
  <main>
    <Experience positions={positions} />
    <Education />
    <Skills />
    <Languages />
  </main>
)
