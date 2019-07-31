export interface IPersonalItem {
  title: string
  paragraphs: string[]
  alt: string
  image: string
}

interface IPersonalModel {
  items: IPersonalItem[]
}

export const personalModel: IPersonalModel = {
  items: [
    {
      title: 'Motorsports',
      paragraphs: [
        `I started cart racing at the age of 11, becoming Swiss Champion two times and Vice Champion four times.`,
        'Although I stopped participating in championships two years ago I still enjoy driving around the European circuits with my personal cart.'
      ],
      alt: 'Racing flag',
      image: '/static/images/flag.svg'
    },
    {
      title: 'Web Development',
      paragraphs: [
        `I designed my first website 15 years ago with sliced graphics, table based layouts, framesets and fancy marquees.`,
        `Currently I'm developing a universal Progressive Web Application to find unused CSS on a website using React, Node.js and Nightmare (incl. Electron).`
      ],
      alt: 'Web Development',
      image: '/static/images/development.svg'
    },
    {
      title: 'Travelling',
      paragraphs: ['Experiencing new countries, cultures and food has always been a passion of mine.'],
      alt: 'Plane',
      image: '/static/images/plane.svg'
    }
  ]
}
