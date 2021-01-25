import { format } from "date-fns"
import { PrismicDocument, PrismicEducation, PrismicPosition } from "lib/prismic/types"
import { Date, RichText } from "prismic-reactjs"
import { FC } from "react"
import { Card } from "./card"
import styles from "./timeline.module.scss"
import classNames from "classnames"

type PossibleDocuments = PrismicPosition | PrismicEducation

interface TimelineProps {
  items: PrismicDocument<PossibleDocuments>[]
}

export const Timeline: FC<TimelineProps> = ({ items }) => {
  return (
    <>
      {items
        .sort((a, b) => new Date(b.data.end_date) - new Date(a.data.end_date))
        .map(({ id, data }, i) => {
          const isFirst = i === 0
          const isLast = i === items.length - 1
          const startDate = Date(data.start_date)
          const endDate = data.end_date ? Date(data.end_date) : null

          return (
            <div className={styles.item} key={id}>
              <div className={styles.titleColumn}>
                <Card>
                  {isPosition(data) && (
                    <>
                      <h3>{data.position}</h3> <small>@{data.company}</small>
                    </>
                  )}
                  {isEducation(data) && (
                    <>
                      <h3>{data.title}</h3> <small>@{data.school}</small>
                    </>
                  )}
                  <small className={styles.hiddenDesktop}>
                    {format(startDate, "LLLL yyyy")} - {endDate ? format(endDate, "LLLL yyyy") : "Present"}
                  </small>
                </Card>
              </div>
              <div className={classNames(styles.dateColumn, styles.hiddenMobile)}>
                <div
                  className={classNames(styles.timeline, {
                    [styles.timelineBackground]: !isFirst,
                  })}
                />
                <div className={styles.date}>
                  <div className={styles.dateStart}>
                    <div>
                      {format(startDate, "LLLL")} <br />
                      {format(startDate, "yyyy")}
                    </div>
                  </div>
                  <div className={styles.dateCircle} />
                  <div className={styles.dateEnd}>
                    <div>
                      {endDate ? (
                        <>
                          {format(endDate, "LLLL")} <br />
                          {format(endDate, "yyyy")}
                        </>
                      ) : (
                        "Present"
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className={classNames(styles.timeline, {
                    [styles.timelineBackground]: !isLast,
                  })}
                />
              </div>
              {isPosition(data) && data.duties && (
                <div className={styles.descriptionColumn}>
                  <Card>
                    <ul>
                      {data.duties.map((duty, index) => (
                        <li key={index}>{RichText.asText([duty])}</li>
                      ))}
                    </ul>
                  </Card>
                </div>
              )}
            </div>
          )
        })}
    </>
  )
}

const isPosition = (data: PossibleDocuments): data is PrismicPosition => data.hasOwnProperty("position")
const isEducation = (data: PossibleDocuments): data is PrismicEducation => data.hasOwnProperty("school")
