import { PrismicDocument, PrismicSkill } from 'lib/prismic/types'
import { FC, Fragment } from 'react'
import { CardGrid } from './cardGrid'
import { PrintBreakBefore } from './print'
import { Anchors, Section } from './section'
import { Skill } from './skill'
import styles from './skills.module.scss'

const printBreakAfter = [3]

interface SkillsProps {
  skills: Array<PrismicDocument<PrismicSkill>>
}

export const Skills: FC<SkillsProps> = ({ skills }) => (
  <Section title={Anchors.Skills}>
    <CardGrid numOfCells={2}>
      {skills.map((skill, i) => (
        <Fragment key={skill.id}>
          <Skill skill={skill} />
          {printBreakAfter.includes(i) && (
            <div className={styles.printWrapper}>
              <PrintBreakBefore />
            </div>
          )}
        </Fragment>
      ))}
    </CardGrid>
  </Section>
)
