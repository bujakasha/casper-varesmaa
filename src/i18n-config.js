const languages = ['fi', 'en']
const languagesFull = [
  {
    id: 'fi',
    label: 'Suomi',
  },
  {
    id: 'en',
    label: 'English',
  },
]
const catalogs = {
  fi: {messages: {...require('./locale/fi/index').default}},
  en: {messages: {...require('./locale/en/index').default}},
}

const defaultLanguage = 'fi'
const prefix = lang => (lang === defaultLanguage ? '' : '/' + lang)

const deprefix = pathname => {
  const path = pathname
  if (path.match(/(^\/en\/)/)) {
    return path.substr(3)
  } else if (path.match(/(^\/en$)/)) {
    return path.substr(2)
  } else {
    return path
  }
}
const homelink = lang => {
  return lang.match(/fi/) ? '/' : `/${lang}/`
}

const langFromPath = pathname => (pathname.startsWith('/en/') ? 'en' : 'fi')

exports.defaultLanguage = defaultLanguage
exports.languages = languages
exports.languagesFull = languagesFull

exports.catalogs = catalogs
exports.prefix = prefix
exports.deprefix = deprefix
exports.langFromPath = langFromPath
exports.getHomelink = homelink
