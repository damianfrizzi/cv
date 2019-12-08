import { ITimeLineItem } from '../components/timeline'

interface IExperienceModel {
  items: ITimeLineItem[]
}

export const experienceModel: IExperienceModel = {
  items: [
    {
      title: 'Lead Frontend Engineer',
      location: 'Avrios International AG',
      dateFrom: 'November 2019',
      dateTo: 'Present',
      paragraphs: ['Improving driver facing features of the B2B fleet management platform', 'Migrating from an AngularJS/Angular hybrid to Angular']
    },
    {
      title: 'Lead Frontend Engineer',
      location: 'Digitec Galaxus AG',
      dateFrom: 'May 2018',
      dateTo: 'October 2019',
      paragraphs: [
        'Responsible for the conception and implementation of a modernized, universal (isomorphic) Frontend architecture using React, GraphQL, Apollo, ASP.NET Web API, Docker.',
        'Launch and continous deployment of the new Frontend application using automated build/release pipelines (VSTS) and Azure Kubernetes Services.',
        'Coordinating department wide integration of the new technology stack.'
      ]
    },
    {
      title: 'Teamleader Frontend Engineering & User Experience',
      location: 'Digitec Galaxus AG',
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
      location: 'Digitec Galaxus AG',
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
      location: 'Digitec Galaxus AG',
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
      location: 'Glencore International AG',
      dateFrom: 'June 2010',
      dateTo: 'December 2010',
      paragraphs: [
        'Development of interactive floorplans to assign seats to employess.',
        'The implementation was done with PHP and MySQL in the backend to fetch data through a RESTful Lotus Notes webservice and JavaScript, HTML and CSS.'
      ]
    }
  ]
}
