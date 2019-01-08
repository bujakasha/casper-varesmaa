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
const prefix = lang => (lang == defaultLanguage ? '' : '/' + lang)

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

const langFromPath = pathname =>
  pathname.startsWith('/en/') ? 'en' : 'fi'

exports.defaultLanguage = defaultLanguage
exports.languages = languages
exports.languagesFull = languagesFull

exports.catalogs = catalogs
exports.prefix = prefix
exports.deprefix = deprefix
exports.langFromPath = langFromPath
exports.getHomelink = homelink

const WEEKDAYS_SHORT = {
  fi: ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'],
  en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
}
const MONTHS = {
  fi: [
    'Tammikuu',
    'Helmikuu',
    'Maaliskuu',
    'Huhtikuu',
    'Toukokuu',
    'Kesäkuu',
    'Heinäkuu',
    'Elokuu',
    'Syyskuu',
    'Lokakuu',
    'Marraskuu',
    'Joulukuu',
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
}

const WEEKDAYS_LONG = {
  fi: [
    'Maanantai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai',
    'Sunnuntai',
  ],
  en: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Firday',
    'Saturday',
    'Sunday',
  ],
}

const FIRST_DAY_OF_WEEK = {
  fi: 0,
  en: 7,
}
const LABELS = {
  fi: {nextMonth: 'Seuraava kuukausi', previousMonth: 'Edellinen kuukausi'},
  en: {nextMonth: 'Next month', previousMonth: 'Previous month'},
}

exports.WEEKDAYS_SHORT = WEEKDAYS_SHORT
exports.MONTHS = MONTHS
exports.WEEKDAYS_LONG = WEEKDAYS_LONG
exports.FIRST_DAY_OF_WEEK = FIRST_DAY_OF_WEEK
exports.LABELS = LABELS

const dayInpuLocaleProps = (locale = 'fi') => {
  return {
    locale: locale,
    months: MONTHS[locale],
    weekdaysLong: WEEKDAYS_LONG[locale],
    weekdaysShort: WEEKDAYS_SHORT[locale],
    firstDayOfWeek: FIRST_DAY_OF_WEEK[locale],
    labels: LABELS[locale],
  }
}
exports.dayInpuLocaleProps = dayInpuLocaleProps
