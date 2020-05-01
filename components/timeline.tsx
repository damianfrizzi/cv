import { format } from 'date-fns'
import { PrismicDocument, PrismicEducation, PrismicPosition } from 'lib/prismic/types'
import { Date, RichText } from 'prismic-reactjs'
import { FC, Fragment } from 'react'
import { Card } from './card'
import styles from './timeline.module.scss'

type PossibleDocuments = PrismicPosition | PrismicEducation

interface TimelineProps {
  items: PrismicDocument<PossibleDocuments>[]
}

export const Timeline: FC<TimelineProps> = ({ items }) => (
  <>
    {items.map(({ id, data }) => (
      <Fragment key={id}>
        <div className={styles.item}>
          <div className={styles.deco}>
            <div className={styles.decoCircle} />
          </div>

          <div className={styles.content}>
            <Card>
              <h2>
                {isPosition(data) && (
                  <>
                    {data.position} <small>@{data.company}</small>
                  </>
                )}
                {isEducation(data) && (
                  <>
                    {data.title} <small>@{data.school}</small>
                  </>
                )}
              </h2>
              <small>
                {format(Date(data.start_date), 'LLLL yyyy')} - {data.end_date ? format(Date(data.end_date), 'LLLL yyyy') : 'Present'}
              </small>
              {isPosition(data) && data.duties && (
                <ul>
                  {data.duties.map((duty, i) => (
                    <li key={i}>{RichText.asText([duty])}</li>
                  ))}
                </ul>
              )}
            </Card>
          </div>
        </div>
      </Fragment>
    ))}
  </>
)

const isPosition = (data: PossibleDocuments): data is PrismicPosition => data.hasOwnProperty('position')
const isEducation = (data: PossibleDocuments): data is PrismicEducation => data.hasOwnProperty('school')
