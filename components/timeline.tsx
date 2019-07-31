import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
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

const timelineItemMarginBottom = theme.spacing(5)

const TimelineContent = styled.div`
  ul {
    margin-top: 1rem;
  }
`

const TimelineDeco = styled.div`
  display: none;
  position: relative;
  padding: ${props => props.theme.spacing(3)} 0;

  @media (min-width: 940px), print {
    display: block;
  }
`

const TimelineDecoCircle = styled.div`
  width: ${props => props.theme.spacing(3)};
  height: ${props => props.theme.spacing(3)};
  border-radius: 50%;
  box-shadow: inset ${props => props.theme.primaryColor} 0 0 0 0.125rem;
  background: #fff;

  &::after {
    content: '';
    position: absolute;
    top: ${props => props.theme.spacing(6)};
    height: ${`calc(100% + ${timelineItemMarginBottom})`};
    width: 0.125rem;
    left: 50%;
    transform: translateX(-50%);
    background: ${props => props.theme.primaryColor};
  }
`

const TimelineItem = styled.article`
  @media (min-width: 940px), print {
    position: relative;
    break-inside: avoid;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: ${props => props.theme.spacing(7)};

    & + & {
      margin-top: ${timelineItemMarginBottom};
    }

    &:last-child ${TimelineDecoCircle}::after {
      content: none;
    }
  }
`

export const Timeline: FunctionComponent<ITimelineProps> = ({ items }) => (
  <>
    {items.map(item => (
      <TimelineItem key={item.title}>
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
