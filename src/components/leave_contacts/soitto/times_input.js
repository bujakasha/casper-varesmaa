import React from 'react'
import PropTypes from 'prop-types'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import {DateUtils} from 'react-day-picker'
import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'

import addMonths from 'date-fns/add_months'


import {Trans, I18n} from '@lingui/react'

import {dayInpuLocaleProps} from '../../../i18n-config'
import {createTuntiOption} from '../../../utils/forms'



import 'react-day-picker/lib/style.css'


const parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, {locale})
  if (DateUtils.isDate(parsed)) {
    return parsed
  }
  return undefined
}
const modifiers = activeDay => ({
  highlighted: new Date(activeDay),
})
const formatDate = (date, format, locale) => {
  return dateFnsFormat(date, format, {locale})
}
const FORMAT = 'D-M-YYYY'


class DateHourInput extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
     // selectedDay: this.props.ajankohta,
      times: createTuntiOption(),
      locale: 'fi',
    }
  }

  switchLocale = (e) => {
    const locale = e.target.value || 'en'
    this.setState({locale})
  }
  onTuntiChange = event => {
    this.props.onChange('tunti', event.target.value)
  }

  handleDayChange = (selectedDay, modifiers, dayPickerInput) => {
    this.props.onChange('ajankohta', selectedDay)
    this.props.onChange('pvm', selectedDay)
  }

  render() {
    const {selectedDay, locale, times} = this.state
    const {error, ajankohta, label, errorMsg, tunti, outerClassName} = this.props

    return (
      <div className={"pick_date form-group "+outerClassName}>
        <label>
          {label}
        </label>
        <div className="d-flex ">
        <select
          value={tunti}
          onChange={this.onTuntiChange}
          className={'custom-select noFocus noBorder sw-input  radius-left-0'}
        >
          
          <option value={'00:00'}> Huomenna </option>
          <option value={'00:00'}> Huomenna </option>
        </select>
 


        <select
          value={tunti}
          onChange={this.onTuntiChange}
          className={'custom-select noFocus noBorder sw-input  radius-left-0'}
        >
          {(times &&
            times.length &&
            times.map((time, i) => (
              <option key={`time-${i}`} value={time}>
                klo {time}
              </option>
            ))) ||
            null}
          <option value={'00:00'}> Ei määritetty </option>
        </select>
        </div>
        {error ? (
            <div className="invalid-feedback">
              {errorMsg}
            </div>
          ) : null}
      </div>
    )
  }
}

DateHourInput.propTypes = {
  label: PropTypes.string,
  ajankohta: PropTypes.string,
  label: PropTypes.string,
  tunti: PropTypes.bool,
  error: PropTypes.object,
  errorMsg: PropTypes.string,
  onChange: PropTypes.func,
  outerClassName: PropTypes.string,
}

export default DateHourInput


/*
 <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          format={FORMAT}
          value={ajankohta}
          onDayChange={this.handleDayChange}
          inputProps={{
            className: 'date-whole sw-input noFocus radius-right-0' +  ((error && ' is-invalid') || '')
          }}
          selectedDay={ajankohta}
          dayPickerProps={{
            ...dayInpuLocaleProps(locale),
            modifiers: modifiers(ajankohta),
            disabledDays: {
              daysOfWeek: [5, 6],
            },
            selectedDay: ajankohta,
            month: ajankohta,
            showWeekNumbers: false,
            showOutsideDays: true,
          }}
          placeholder={`${dateFnsFormat(selectedDay, FORMAT)}`}
        />
         */