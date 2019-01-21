/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const Promise = require(`bluebird`)
const { languages, defaultLanguage } = require('./src/i18n-config')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  return new Promise((resolve, reject) => {
    deletePage(page)
    languages.map(language => {
      let newPage = Object.assign({}, page, {
        originalPath: page.path,
        path:
          language === defaultLanguage ? page.path : '/' + language + page.path,
        context: {
          lang: language,
        },
      })

      createPage(newPage)
    })

    resolve()
  })
}
