import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'

import {dayInpuLocaleProps} from '../../../i18n-config'
import {createTuntiOption} from '../../../utils/forms'

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, {locale})
  if (DateUtils.isDate(parsed)) {
    return parsed
  }
  return undefined
}

const modifiers = activeDay => ({
  highlighted: new Date(activeDay),
})

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, {locale})
}
const FORMAT = 'D-M-YYYY'

class DateInput extends React.PureComponent {
  constructor(props) {
    super(props)
    this.switchLocale = this.switchLocale.bind(this)
    this.state = {
      selectedDay: this.props.value || undefined,
      isEmpty: true,
      isDisabled: false,
      times: createTuntiOption(),
      locale: 'fi',
    }
  }

  switchLocale(e) {
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
    const {value, error, errorMsg, tunti} = this.props

    return (
      <div className="pick_date d-flex form-group">
        <br />

        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          format={FORMAT}
          // value={formatDate(selectedDay, FORMAT)}
          value={value}
          onDayChange={this.handleDayChange}
          inputProps={{
            className: 'date-whole sw-input noFocus radius-right-0' +  ((error && ' is-invalid') || '')
          }}
          selectedDay={value}
          dayPickerProps={{
            ...dayInpuLocaleProps(locale),
            modifiers: modifiers(value),
            disabledDays: {
              daysOfWeek: [5, 6],
            },
            selectedDay: value,
            month: value,
            // fromMonth: new Date(),
            // toMonth: addMonths(new Date(), 2),
            showWeekNumbers: false,
            showOutsideDays: true,
          }}
          placeholder={`${dateFnsFormat(selectedDay, FORMAT)}`}
        />
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

        {error ? (
            <div className="invalid-feedback">
              {errorMsg}ddd
            </div>
          ) : null}
      </div>
    )
  }
}

export default DateInput
