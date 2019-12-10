import { FC, Fragment } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import { Card } from './card'
import { PrintBreakBefore } from './print'

export interface ITimeLineItem {
  title: string
  location: string
  description?: string | []
  paragraphs?: string[]
  dateFrom: string
  dateTo: string
}

interface ITimelineProps {
  items: ITimeLineItem[]
  printBreakAfter?: number[]
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

const PrintWrapper = styled.div`
  @media print {
    + ${TimelineItem} {
      ${TimelineDeco},
      ${TimelineContent} {
        margin-top: ${theme.spacing(10)};
      }

      ${TimelineDecoCircle}::after {
        content: '';
        top: -${theme.spacing(15)};
        height: ${theme.spacing(18)};
      }
    }
  }
`

export const Timeline: FC<ITimelineProps> = ({ items, printBreakAfter = [] }) => (
  <>
    {items.map((item, i) => (
      <Fragment key={item.title + item.location}>
        {printBreakAfter.includes(i) && (
          <PrintWrapper>
            <PrintBreakBefore />
          </PrintWrapper>
        )}
        <TimelineItem key={item.title + item.location}>
          <TimelineDeco>
            <TimelineDecoCircle />
          </TimelineDeco>

          <TimelineContent>
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
                  {item.paragraphs.map((paragraph, j) => (
                    <li key={`paragraph-${j}`}>{paragraph}</li>
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
