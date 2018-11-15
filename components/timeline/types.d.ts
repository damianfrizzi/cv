export interface ITimelineProps {
  items: ITimeLineItem[]
}

export interface ITimeLineItem {
  title: string
  location: string
  description?: string | []
  paragraphs?: string[]
  dateFrom: string
  dateTo: string
}
