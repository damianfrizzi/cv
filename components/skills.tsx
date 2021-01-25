import { PrismicDocument, PrismicSkill } from "lib/prismic/types"
import { FC } from "react"
import { CardGrid } from "./cardGrid"
import { Anchors, Section } from "./section"
import { Card } from "./card"
import styles from "./skills.module.scss"

interface SkillsProps {
  skills: PrismicDocument<PrismicSkill>[]
}

export const Skills: FC<SkillsProps> = ({ skills }) => (
  <Section title={Anchors.Skills}>
    <CardGrid numOfCells={2}>
      {skills.map(({ data }, _i) => {
        const items = [...(data?.proficiency ?? []), ...(data?.basics ?? [])]

        return (
          <Card key={data.title}>
            <h3>{data.title}</h3>

            <div className={styles.skillBlock}>
              <div className={styles.list}>{items.map((p) => p.skill).join(", ")}</div>
            </div>
          </Card>
        )
      })}
    </CardGrid>
  </Section>
)
