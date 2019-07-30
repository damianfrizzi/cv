module.exports = function babelConfig(api = null) {
  if (api) {
    api.cache(true)
  }

  return {
    presets: ['next/babel'],
    plugins: [['styled-components', { ssr: true }]]
  }
}
