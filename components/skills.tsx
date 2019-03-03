import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Anchors, Section } from './section'
import { Skill } from './skill'

export interface ISkill {
  category: string
  expertise: number
  keywordsProficient?: string[]
  keywordsBasic?: string[]
}

const skills: ISkill[] = [
  {
    category: 'JavaScript',
    expertise: 95,
    keywordsProficient: ['ES2017', 'ES2016', 'Node.JS', 'TypeScript', 'React', 'Redux', 'Next.js', 'RequireJS'],
    keywordsBasic: [
      'React Native',
      'Vue.JS',
      'GatsbyJS',
      'AngularJS',
      'Electron',
      'WebGL (mainly Three.js)',
      'Ionic',
      'NativeScript',
      'Phonegap/Cordova',
      'Phaser'
    ]
  },
  {
    category: 'HTML & CSS',
    expertise: 95,
    keywordsProficient: ['HTML5', 'CSS', 'CSS Modules', 'Sass'],
    keywordsBasic: ['Styled Components', 'Less', 'Stylus']
  },
  {
    category: 'Version Control',
    expertise: 80,
    keywordsProficient: ['Git', 'SVN', 'Github', 'Bitbucket'],
    keywordsBasic: ['Hg']
  },
  {
    category: 'Testing',
    expertise: 80,
    keywordsProficient: ['Unit & UI Testing (Snapshot & E2E)', 'react-testing-library', 'Enzyme', 'Jest', 'Chai', 'Cypress'],
    keywordsBasic: ['Browser Stack Live', 'Selenium']
  },
  {
    category: 'Automation, Building & Packaging',
    expertise: 80,
    keywordsProficient: ['Webpack', 'Grunt', 'Gulp', 'Bower', 'Yarn', 'npm']
  },
  {
    category: 'GraphQL',
    expertise: 70,
    keywordsProficient: ['Apollo Server', 'Apollo Client'],
    keywordsBasic: ['Prisma']
  },
  {
    category: 'CI, CD & DevOps',
    expertise: 50,
    keywordsProficient: ['VSTS', 'TeamCity', 'Docker'],
    keywordsBasic: ['Azure', 'Kubernetes']
  },
  {
    category: 'C# & .NET',
    expertise: 30,
    keywordsBasic: ['ASP.NET Web API']
  },
  {
    category: 'PHP & MySQL',
    expertise: 30,
    keywordsBasic: ['Wordpress', 'Magento', 'Symfony']
  }
]

const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: var(--default-padding);

  @media (min-width: 940px), print {
    grid-template-columns: 1fr 1fr;
  }
`

export const Skills: FunctionComponent = () => (
  <Section title={Anchors.Skills}>
    <SkillsWrapper>
      {skills.map(skill => (
        <Skill key={skill.category} skill={skill} />
      ))}
    </SkillsWrapper>
  </Section>
)
