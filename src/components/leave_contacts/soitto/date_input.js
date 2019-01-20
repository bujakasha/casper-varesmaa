import React from 'react'
import PropTypes from 'prop-types'

import dateFnsFormat from 'date-fns/format'


import addDays from 'date-fns/add_days'
import getISOday from 'date-fns/get_iso_day'




import {Trans, I18n} from '@lingui/react'

import {dayInpuLocaleProps} from '../../../i18n-config'
import {createTuntiOption} from '../../../utils/forms'







export const getWeekDayName=(date)=>{
  switch(getISOday(date)) {
    case 1:
      return 'Maanantai'
      break;
    case 2:
      return 'Tiistai'
      break;
    case 3:
      return 'Keskiviikko'
      break;
    case 4:
      return 'Torstai'
      break;
    case 5:
      return 'Perjantai'
      break;
    case 6:
      return 'Lauantai'
      break;
      default:
      return false
  }
}

const FORMAT = 'D.M'

export const formatDate = (date, format, locale) => {
  return dateFnsFormat(date, format, {locale})
}


export const generateDates = (date=new Date())=>{
    var daysLength = Array.from(Array(25).keys())
    var arrayOfDates = [];
    var currentDate = null;

    daysLength.map((index)=>{
      currentDate = addDays(date,index);
      if(getWeekDayName(currentDate)){
        arrayOfDates.push(`${getWeekDayName(currentDate)} ${formatDate(currentDate,FORMAT,{locale:'fi'})}`) 
      }

    })
    return arrayOfDates
   
}




class DateHourInput extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
     // selectedDay: this.props.ajankohta,
      days:generateDates(),
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

  handleDayChange = event => {
    this.props.onChange('ajankohta', event.target.value)
    this.props.onChange('pvm', event.target.value)
  }


  render() {
    const {selectedDay, locale,days, times} = this.state
    const {error, ajankohta, label, errorMsg, tunti, outerClassName} = this.props

    return (
      <div className={"pick_date form-group "+outerClassName}>
        <label>
          {label}
        </label>
        <div className="d-flex ">

   
  


        <select
          value={ajankohta}
          onChange={this.handleDayChange}
          className={'custom-select date noFocus noBorder sw-input radius-left-0'}
        >

        {(days &&
            days.length &&
            days.map((day, i) => (
              <option key={`time-${i}`} value={day}>
                {day}
              </option>
            ))) ||
            null}   
         
          <option value={'milloin tahansa'}> Milloin tahansa </option>
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