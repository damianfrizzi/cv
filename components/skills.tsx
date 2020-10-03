import { PrismicDocument, PrismicSkill } from 'lib/prismic/types'
import { FC } from 'react'
import { CardGrid } from './cardGrid'
import { Anchors, Section } from './section'
import { Card } from './card'
import styles from './skills.module.scss'

interface SkillsProps {
  skills: PrismicDocument<PrismicSkill>[]
}

export const Skills: FC<SkillsProps> = ({ skills }) => (
  <Section title={Anchors.Skills}>
    <CardGrid numOfCells={2}>
      {skills.map(({ data }, _i) => (
        <Card key={data.title}>
          <h3>{data.title}</h3>

          {data.proficiency && data.proficiency.length > 0 && (
            <div className={styles.skillBlock}>
              <div className={styles.title}>Proficiency:</div>
              <div className={styles.list}>{data.proficiency.map((p) => p.skill).join(', ')}</div>
            </div>
          )}

          {data.basics && data.basics?.length > 0 && (
            <div className={styles.skillBlock}>
              <div className={styles.title}>Basics:</div>
              <div className={styles.list}>{data.basics.map((b) => b.skill).join(', ')}</div>
            </div>
          )}
        </Card>
      ))}
    </CardGrid>
  </Section>
)
