import React from 'react'
import './_leave_contact.scss'

import DayPickerInput from 'react-day-picker/DayPickerInput'
import {DateUtils} from 'react-day-picker'
import 'react-day-picker/lib/style.css'

import dateFnsFormat from 'date-fns/format'
import dateFnsParse from 'date-fns/parse'
import addMonths from 'date-fns/add_months'

import {dayInpuLocaleProps} from '../../i18n-config'
// import { fi } from 'date-fns/locale'

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
const FORMAT_DISPLAY = 'D / M / YYYY'
const FORMAT = 'D-M-YYYY'

class DateInput extends React.PureComponent {
  constructor(props) {
    super(props)
    this.switchLocale = this.switchLocale.bind(this)
    this.state = {
      selectedDay:  this.props.value || undefined,
      isEmpty: true,
      isDisabled: false,

      locale: 'fi',
    }
  }
  

  switchLocale(e) {
    const locale = e.target.value || 'en'
    this.setState({locale})
  }

  handleDayChange = (selectedDay, modifiers, dayPickerInput) => {
    // const input = dayPickerInput.getInput();
    /* this.setState({
      selectedDay,
     // isEmpty: !input.value.trim(),
    //  isDisabled: modifiers.disabled === true,
    });*/
    this.props.onChange('ajankohta', selectedDay)
  }

  render() {
    const {selectedDay, locale} = this.state
    const {value} = this.props

    return (
      <div className="pick_date d-flex">
      <br/>
        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          format={FORMAT}
         // value={formatDate(selectedDay, FORMAT)}
          value={value}
          onDayChange={this.handleDayChange}
          inputProps={{className: 'date-whole noFocus'}}
         selectedDay={value}
          dayPickerProps={{
            ...dayInpuLocaleProps(locale),
            modifiers: modifiers(value),
            disabledDays: {
              daysOfWeek: [5, 6],
            },
            selectedDay: value,
            month:value,
            // fromMonth: new Date(),
            // toMonth: addMonths(new Date(), 2),
            showWeekNumbers: false,
            showOutsideDays: true,
          }}
          // component={props => <input value={formatDate(selectedDay,FORMAT)} {...props} />}
          placeholder={`${dateFnsFormat(selectedDay, FORMAT)}`}
        />
      </div>
    )
  }
}

export default DateInput

/*

 <input type="text" value={'20 / 07 / 2018'}  name="year"  className="date-whole"/>
       <input type="text" value={'Klo 18:50'}  name="year"  className="date-whole"/>

    <h4>
        <input type="text" value={day} name="day" onChange={this.onChange}  className="date-input"/>
        /
        <input type="text"
         value={month<10?`0${month}`:month} 
         // onChange={this.onChange} 
          onChange={this.onChange.bind(null, '(0[1-9]|[12]\d|3[01])')}
          data-regex="(0[1-9]|[12]\d|3[01])"
           name="month" className="date-input"/>
        /
        <input type="text" value={year}  name="year"  onChange={this.onChange}  className="date-input long"/>
       </h4>
       <h4 className="ml-4">
       Klo <span>16</span>:<span>50</span> 
       </h4>
       
       
       
       
       */
