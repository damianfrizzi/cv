import { Document } from 'prismic-javascript/types/documents'

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

export interface PrismicEducation {
  title?: string
  school?: string
  start_date?: string
  end_date?: string
  duties?: PrismicData[]
}

export interface PrismicSkill {
  title?: string
  progress?: number
  proficiency?: { skill: string }[]
  basics?: { skill: string }[]
}

export interface PrismicLanguage {
  title?: string
  skill_level?: 'Native' | 'Fluent' | 'Intermediate'
}
