import { PrismicDocument, PrismicPosition } from 'lib/prismic/types'
import { FC } from 'react'
import styles from './experience.module.scss'
import { Anchors, Section } from './section'
import { Timeline } from './timeline'

interface ExperienceProps {
  positions: PrismicDocument<PrismicPosition>[]
}

export const Experience: FC<ExperienceProps> = ({ positions }) => (
  <div className={styles.experience}>
    <Section title={Anchors.Experience}>
      <Timeline items={positions} />
    </Section>
  </div>
)
