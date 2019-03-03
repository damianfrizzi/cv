import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Anchors, Locations } from './enums'
import { Section } from './section'
import { ITimeLineItem, Timeline } from './timeline'

const items: ITimeLineItem[] = [
  {
    title: 'Lead Frontend Engineer',
    location: Locations.DigitecGalaxus,
    dateFrom: 'May 2018',
    dateTo: 'Present',
    paragraphs: [
      'Responsible for the conception and implementation of a modernized, universal (isomorphic) Frontend architecture using React, GraphQL, Apollo, ASP.NET Web API, Docker.',
      'Launch and continous deployment of the new Frontend application using automated build/release pipelines (VSTS) and Azure Kubernetes Services.',
      'Coordinating department wide integration of the new technology stack.'
    ]
  },
  {
    title: 'Teamleader Frontend Engineering & User Experience',
    location: Locations.DigitecGalaxus,
    dateFrom: 'June 2016',
    dateTo: 'May 2018',
    paragraphs: [
      'Recruiting, coordinating and leading a team of five Frontend Engineers, three Interaction Designers and one UX-Researcher.',
      'Conception and prototyping of a revamped Frontend architecture with the goal of decoupling the entire Frontend from the existing monolithic application.',
      'Development of mobile applications (iOS & Android) using React Native.'
    ]
  },
  {
    title: 'Frontend Engineer',
    location: Locations.DigitecGalaxus,
    dateFrom: 'October 2014',
    dateTo: 'June 2016',
    paragraphs: [
      `As sole Frontend Engineer responsible for maintaining and improving the Frontend of the company's onlineshops (digitec.ch & galaxus.ch) in close collaboration with Backend Engineers, Business Development and the CTO as Product Owner.`,
      'Restructuring whole website from the given adaptive design to a fully responsive website in order to improve user experience and stop maintaining and developing two software projects.',
      'Assistance in hiring new Frontend Engineers and Interaction Designers.'
    ]
  },
  {
    title: 'Junior Frontend Engineer',
    location: Locations.DigitecGalaxus,
    dateFrom: 'May 2013',
    dateTo: 'October 2014',
    paragraphs: [
      `Successfully implemented 15 projects (mostly websites for small and medium-sized enterprises) for the company's design agency besides doing development for our own onlineshops.`,
      'Confrontation with different frameworks and technologies (Backbone.js, Require-JS, AngularJS, Git, SVN etc.).',
      'Atlassian software (Jira & Confluence) and Scrum methodolgy was used for all projects.'
    ]
  },
  {
    title: 'Web Developer',
    location: Locations.Glencore,
    dateFrom: 'June 2010',
    dateTo: 'December 2010',
    paragraphs: [
      'Development of interactive floorplans to assign seats to employess.',
      'The implementation was done with PHP and MySQL in the backend to fetch data through a RESTful Lotus Notes webservice and JavaScript, HTML and CSS.'
    ]
  }
]

const Wrapper = styled.div`
  ul {
    position: relative;
    list-style: none;
    margin-left: 0;
    padding-left: 1.2em;

    li {
      @media print {
        padding: 0;
      }

      &::before {
        content: '-';
        position: absolute;
        left: 0;
        color: var(--primary-color);
      }
    }
  }
`

export const Experience: FunctionComponent = () => (
  <Wrapper>
    <Section title={Anchors.Experience}>
      <Timeline items={items} />
    </Section>
  </Wrapper>
)
