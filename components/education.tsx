import { PrismicDocument, PrismicEducation } from 'lib/prismic/types'
import { FC } from 'react'
import { Anchors, Section } from './section'
import { Timeline } from './timelineNew'
interface EducationProps {
  educations: Array<PrismicDocument<PrismicEducation>>
}

export const Education: FC<EducationProps> = ({ educations }) => (
  <Section title={Anchors.Education}>
    <Timeline items={educations} />
  </Section>
)
