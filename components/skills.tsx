import { FunctionComponent } from 'react'
import { CardGrid } from './cardGrid'
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
    keywordsProficient: ['HTML5', 'CSS', 'Styled Components', 'CSS Modules', 'Sass'],
    keywordsBasic: ['Less', 'Stylus']
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
    keywordsProficient: ['react-testing-library', 'Enzyme', 'Jest', 'Chai', 'Cypress'],
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

export const Skills: FunctionComponent = () => (
  <Section title={Anchors.Skills}>
    <CardGrid numOfCells={2}>
      {skills.map(skill => (
        <Skill key={skill.category} skill={skill} />
      ))}
    </CardGrid>
  </Section>
)
