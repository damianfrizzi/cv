export const theme = {
  primaryColor: '#e74c3c',
  linkColor: '#d13800',
  linkHoverColor: '#e74c3c',
  spacing: (quantifier: number) => {
    const scalingFactor = 8
    return `${(quantifier * scalingFactor) / 16}rem`
  }
}
