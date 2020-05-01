import { Document } from 'prismic-javascript/d.ts/documents'

export interface PrismicDocument<T> extends Omit<Document, 'data'> {
  data: T
}

export interface PrismicData {
  type: string
  text: string
  spans: never[]
}

export interface PrismicPosition {
  position?: string
  company?: string
  start_date?: string
  end_date?: string
  duties?: PrismicData[]
}
