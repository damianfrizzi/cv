enum LanguageProficiencies {
  Native = 'Native Language',
  Fluent = 'Fluent',
  Intermediate = 'Intermediate'
}

interface ILanguageModel {
  items: Array<{
    title: string
    proficiency: LanguageProficiencies
  }>
}

export const languageModel: ILanguageModel = {
  items: [
    {
      title: 'German',
      proficiency: LanguageProficiencies.Native
    },
    {
      title: 'English',
      proficiency: LanguageProficiencies.Fluent
    },
    {
      title: 'French',
      proficiency: LanguageProficiencies.Intermediate
    },
    {
      title: 'Italian',
      proficiency: LanguageProficiencies.Intermediate
    }
  ]
}
