import { format } from 'date-fns'
import { PrismicDocument, PrismicPosition } from 'lib/prismic/types'
import { Date, RichText } from 'prismic-reactjs'
import { FC, Fragment } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import { Card } from './card'

interface TimelineProps {
  items: Array<PrismicDocument<PrismicPosition>>
}

export const timelineItemMarginBottom = theme.spacing(5)

const TimelineContent = styled.div`
  margin-top: ${timelineItemMarginBottom};

  ul {
    margin-top: 1rem;
  }
`

const TimelineDeco = styled.div`
  display: none;
  position: relative;
  margin-top: ${timelineItemMarginBottom};
  padding: ${theme.spacing(3)} 0;

  @media (min-width: 940px), print {
    display: block;
  }
`

const TimelineDecoCircle = styled.div`
  width: ${theme.spacing(3)};
  height: ${theme.spacing(3)};
  border-radius: 50%;
  box-shadow: inset ${theme.primaryColor} 0 0 0 0.125rem;
  background: #fff;

  &::after {
    content: '';
    position: absolute;
    top: ${theme.spacing(6)};
    height: ${`calc(100% + ${timelineItemMarginBottom})`};
    width: 0.125rem;
    left: 50%;
    transform: translateX(-50%);
    background: ${theme.primaryColor};
  }
`

const TimelineItem = styled.article`
  @media (min-width: 940px), print {
    position: relative;
    break-inside: avoid;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: ${theme.spacing(7)};

    &:last-child ${TimelineDecoCircle}::after {
      content: none;
    }
  }
`

export const Timeline: FC<TimelineProps> = ({ items }) => (
  <>
    {items.map(({ id, data }) => (
      <Fragment key={id}>
        <TimelineItem>
          <TimelineDeco>
            <TimelineDecoCircle />
          </TimelineDeco>

          <TimelineContent>
            <Card>
              <h2>
                {data.position} <small>@{data.company}</small>
              </h2>
              <small>
                {format(Date(data.start_date), 'LLLL yyyy')} - {data.end_date ? format(Date(data.end_date), 'LLLL yyyy') : 'Present'}
              </small>
              {data.duties && (
                <ul>
                  {data.duties.map((duty, i) => (
                    <li key={i}>{RichText.asText([duty])}</li>
                  ))}
                </ul>
              )}
            </Card>
          </TimelineContent>
        </TimelineItem>
      </Fragment>
    ))}
  </>
)
