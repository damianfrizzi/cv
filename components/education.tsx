import { PrismicDocument, PrismicEducation } from 'lib/prismic/types'
import { FC } from 'react'
import { Anchors, Section } from './section'
import { Timeline } from './timeline'

interface EducationProps {
  educations: PrismicDocument<PrismicEducation>[]
}

export const Education: FC<EducationProps> = ({ educations }) => (
  <Section title={Anchors.Education}>
    <Timeline items={educations} />
  </Section>
)
