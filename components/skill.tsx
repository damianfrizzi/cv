import { PrismicDocument, PrismicSkill } from 'lib/prismic/types'
import { FC } from 'react'
import { Card } from './card'
import styles from './skill.module.scss'

interface SkillProps {
  skill: PrismicDocument<PrismicSkill>
}

export const Skill: FC<SkillProps> = ({ skill: { data } }) => (
  <Card>
    <h2>{data.title}</h2>

    <div className={styles.expertiseWrapper}>
      <div className={styles.expertise} style={{ width: `${data.progress}%` }} />
    </div>

    {data.profficiency && data.profficiency.length > 0 && (
      <div className={styles.paragraph}>
        <div className={styles.small}>Profficiency:</div>
        <div className={styles.span}>{data.profficiency.map(p => p.skill).join(', ')}</div>
      </div>
    )}

    {data.basics && data.basics?.length > 0 && (
      <div className={styles.paragraph}>
        <div className={styles.small}>Basics:</div>
        <div className={styles.span}>{data.basics.map(b => b.skill).join(', ')}</div>
      </div>
    )}
  </Card>
)
