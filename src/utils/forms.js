import startOfTomorrow from 'date-fns/start_of_tomorrow'
import isWeekend from 'date-fns/is_weekend'
import addDays from 'date-fns/add_days'
import dateFnsFormat from 'date-fns/format'

import getISOday from 'date-fns/get_iso_day'

import Validator from './validator'

export const createTuntiOption = () => {
  var quarterHours = ['00', '30']
  var times = []
  for (var i = 10; i < 22; i++) {
    for (var j = 0; j < 2; j++) {
      times.push(i + ':' + quarterHours[j])
    }
  }
  return times
}

export const getNextWeekday = () => {
  let nextDay = startOfTomorrow()
  if (isWeekend(nextDay)) {
    nextDay = addDays(nextDay, 1)
  }
  if (isWeekend(nextDay)) {
    //nextDay = addDays(nextDay, 1)
  }
  return nextDay
}

export const telPattern = [
  {exactly: '+'},
  {exactly: '('},
  {char: /\d/, repeat: 3},
  {exactly: ')'},
  {exactly: ' '},
  {char: /\d/, repeat: 2},
  {char: /\d/, repeat: 3},
  {char: /\d/, repeat: 4},
  {char: /[a-z]/i},
]
export const telPatternFin = [
  {char: /\d/, repeat: 3},
  {exactly: ' '},
  {char: /\d/, repeat: 2},
  {char: /\d/, repeat: 3},
  {char: /\d/, repeat: 4},
  {char: /[a-z]/i},
]

export const validateSoittopyynto = state => {
  let errorObj = {}

  if (state.nimi && Validator.isEmpty(state.nimi)) {
    errorObj = {...errorObj, nimi: 'Lisää nimi'}
  }
  if (state.email && !Validator.isEmail(state.email)) {
    errorObj = {...errorObj, email: 'Lisää sähköposti'}
  }
  if (state.puhelin && Validator.isPhoneNumber(state.puhelin)) {
    errorObj = {...errorObj, puhelin: 'Lisää puhelinnumero'}
  }

  return errorObj
}

export const formatDate = (date, format, locale) => {
  return dateFnsFormat(date, format, {locale})
}

export const getWeekDayName = date => {
  switch (getISOday(date)) {
    case 1:
      return 'Maanantai'
    case 2:
      return 'Tiistai'
    case 3:
      return 'Keskiviikko'
    case 4:
      return 'Torstai'
    case 5:
      return 'Perjantai'
    case 6:
      return 'Lauantai'
    default:
      return false
  }
}

export const generateDates = (date = new Date()) => {
  const FORMAT = 'D.M'
  var daysLength = Array.from(Array(25).keys())
  var arrayOfDates = []
  var currentDate = null

  daysLength.map(index => {
    currentDate = addDays(date, index)
    if (getWeekDayName(currentDate)) {
      arrayOfDates.push(
        `${getWeekDayName(currentDate)} ${formatDate(currentDate, FORMAT, {
          locale: 'fi',
        })}`
      )
    }
  })
  return arrayOfDates
}
