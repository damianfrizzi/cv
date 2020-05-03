const withBundleAnalyzer = require('@next/bundle-analyzer')
const withOffline = require('next-offline')

module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  ...withOffline({
    workboxOpts: {
      swDest: '../public/service-worker.js',
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 200,
            },
          },
        },
      ],
    },
  }),
})
