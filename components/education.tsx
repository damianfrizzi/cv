import { FC } from 'react'
import { educationModel } from '../models/education.model'
import { Anchors, Section } from './section'
import { Timeline } from './timeline'

export const Education: FC = () => (
  <Section title={Anchors.Education}>
    <Timeline items={educationModel.items} />
  </Section>
)
