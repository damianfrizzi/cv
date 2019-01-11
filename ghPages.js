const replace = require('replace-in-file')
const fs = require('fs')

/* This file is needed because Github Pages ignores all files and folders prefixed by an underscore (like _next), as documented here: https://github.com/blog/572-bypassing-jekyll-on-github-pages */
fs.writeFileSync('./docs/.nojekyll')

const adaptStaticPathsInHtml = async () => {
  try {
    const changes = await replace({
      files: './docs/**/*.html',
      from: /\"\/static/g,
      to: '"/cv/static'
    })
    console.log('Modified files:', changes.join(', '))
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

const adaptStaticPathsInCss = async () => {
  try {
    const changes = await replace({
      files: './docs/**/*.css',
      from: /url\(\/static/g,
      to: 'url(/cv/static'
    })
    console.log('Modified files:', changes.join(', '))
  } catch (error) {
    console.error('Error occurred:', error)
  }
}

adaptStaticPathsInHtml()
adaptStaticPathsInCss()
