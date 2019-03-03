const withTypescript = require('@zeit/next-typescript')
const { withPlugins } = require('next-compose-plugins')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withPlugins([withTypescript], {
  target: 'serverless',
  webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer && options.dev) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    return config
  }
})
