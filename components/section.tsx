import classNames from 'classnames'
import { FC } from 'react'
import styles from './section.module.scss'

export enum Anchors {
  Experience = 'Experience',
  Education = 'Education',
  Skills = 'Technologies and Skills',
  Languages = 'Languages',
  Personal = 'Personal'
}

interface SectionProps {
  title: Anchors
}

export const Section: FC<SectionProps> = ({ children, title }) => (
  <div className={classNames('container', styles.section)}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
)
