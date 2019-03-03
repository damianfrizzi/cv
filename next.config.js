const withTypescript = require('@zeit/next-typescript')
const { withPlugins } = require('next-compose-plugins')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const reponame = 'cv'

module.exports = withPlugins([withTypescript], {
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${reponame}` : '',
  webpack(config, options) {
    // Do not run type checking twice:
    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin())
    }

    return config
  }
})
