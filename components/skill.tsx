import { ISkill } from 'components/skills'
import { FunctionComponent } from 'react'
import { Card } from './card'
import style from './skill.css'

interface ISkillProps {
  skill: ISkill
}

export const Skill: FunctionComponent<ISkillProps> = ({ skill }) => (
  <Card>
    <div className={style.skillWrapper}>
      <h2>{skill.category}</h2>

      <div aria-label={`${skill.expertise}% out of 100%`} className={style.expertiseWrapper}>
        <div style={{ width: `${skill.expertise}%` }} className={style.expertise} />
      </div>

      {skill.keywordsProficient && (
        <p>
          <small>Profficiency:</small>
          <span>{skill.keywordsProficient.join(', ')}</span>
        </p>
      )}

      {skill.keywordsBasic && (
        <p>
          <small>Basics:</small>
          <span>{skill.keywordsBasic.join(', ')}</span>
        </p>
      )}
    </div>
  </Card>
)
