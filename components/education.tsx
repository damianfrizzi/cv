import { FunctionComponent } from 'react'
import { educationModel } from '../models/education.model'
import { Anchors, Section } from './section'
import { Timeline } from './timeline'

export const Education: FunctionComponent = () => (
  <Section title={Anchors.Education}>
    <Timeline items={educationModel.items} />
  </Section>
)
