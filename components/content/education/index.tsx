import { ITimeLineItem } from 'components/timeline/types'
import { FunctionComponent } from 'react'
import { Anchors, Locations } from '../../enums'
import { Timeline } from '../../timeline'
import { Section } from '../section'

const items: ITimeLineItem[] = [
  {
    title: 'BA, Webdesign and Development',
    location: Locations.SAE,
    dateFrom: '2013',
    dateTo: 'Februar 2017'
  },
  {
    title: 'Diploma Webdesign and Development',
    location: Locations.SAE,
    dateFrom: '2013',
    dateTo: '2015'
  },
  {
    title: 'Swiss A-level exam ("Matura"), modern languages',
    location: Locations.Akad,
    dateFrom: '2009',
    dateTo: '2012'
  }
]
export const Education: FunctionComponent = () => (
  <Section title={Anchors.Education}>
    <Timeline items={items} />
  </Section>
)
