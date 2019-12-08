export const theme = {
  primaryColor: '#487eb0',
  linkColor: '#487eb0',
  linkHoverColor: '#487eb0',
  spacing: (quantifier: number) => {
    const scalingFactor = 8
    return `${(quantifier * scalingFactor) / 16}rem`
  }
}
