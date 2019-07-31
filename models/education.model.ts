import { ITimeLineItem } from '../components/timeline'

interface IEducationModel {
  items: ITimeLineItem[]
}

export const educationModel: IEducationModel = {
  items: [
    {
      title: 'BA, Webdesign and Development',
      location: 'SAE Institute Zurich',
      dateFrom: '2013',
      dateTo: 'February 2017'
    },
    {
      title: 'Diploma Webdesign and Development',
      location: 'SAE Institute Zurich',
      dateFrom: '2013',
      dateTo: '2015'
    },
    {
      title: 'Swiss A-level exam ("Matura"), modern languages',
      location: 'AKAD College',
      dateFrom: '2009',
      dateTo: '2012'
    }
  ]
}
