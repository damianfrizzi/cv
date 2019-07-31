import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Card } from './card'

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
}

const TimelineContent = styled.div`
  @media (min-width: 940px), print {
    margin: 0 0 3rem 4.5rem;
  }

  @media print {
    margin-left: 6rem;
  }

  ul {
    margin-top: 1rem;
  }
`

const TimelineDeco = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 1.5rem;
  bottom: 0;

  @media (min-width: 940px), print {
    display: block;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    top: -0.0625rem;
    left: 0.125rem;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background: #fff;
    border: #fff 0.1875rem solid;
    box-shadow: var(--primary-color) 0 0 0 0.125rem;
  }

  &::after {
    top: 1.2rem;
    left: 0.6875rem;
    transform: translateX(-50%);
    bottom: -4.5rem;
    width: 0.125rem;
    background: var(--primary-color);
  }
`

const TimelineItem = styled.article`
  position: relative;
  break-inside: avoid;

  &:last-child {
    ${TimelineContent} {
      margin-bottom: 0;
    }

    ${TimelineDeco}::after {
      content: none;
    }
  }
`

export const Timeline: FunctionComponent<ITimelineProps> = ({ items }) => (
  <>
    {items.map(item => (
      <TimelineItem key={item.title}>
        <TimelineDeco />

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
                {item.paragraphs.map((paragraph, i) => (
                  <li key={`paragraph-${i}`}>{paragraph}</li>
                ))}
              </ul>
            )}
          </Card>
        </TimelineContent>
      </TimelineItem>
    ))}
  </>
)
