import { FunctionComponent } from 'react'
import { Card } from '../card'
import styles from './styles.css'
import { ITimelineProps } from './types'

export const Timeline: FunctionComponent<ITimelineProps> = ({ items }) => (
  <>
    {items.map(item => (
      <article key={item.title} className={styles.timelineItem}>
        <div className={styles.timeLineItemDeco} />

        <div className={styles.timeLineItemContent}>
          <Card>
            <h2>
              {item.title} <small>@{item.location}</small>
            </h2>
            <small>
              {item.dateFrom} - {item.dateTo}
            </small>
            {item.description && <p>{item.description}</p>}
            {item.paragraphs && (
              <ul>
                {item.paragraphs.map((paragraph: string, j: number) => (
                  <li key={j}>{paragraph}</li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      </article>
    ))}
  </>
)
