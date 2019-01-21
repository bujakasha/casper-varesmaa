import React from 'react'
import PropTypes from 'prop-types'
import {createTuntiOption} from '../../../utils/forms'

class DateHourInput extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      times: createTuntiOption(),
      locale: 'fi',
    }
  }

  switchLocale = e => {
    const locale = e.target.value || 'en'
    this.setState({locale})
  }
  onTuntiChange = event => {
    this.props.onChange('tunti', event.target.value)
  }

  handleDayChange = event => {
    this.props.onChange('ajankohta', event.target.value)
  }

  render() {
    const {times} = this.state
    const {
      error,
      ajankohta,
      ajankohtaData,
      label,
      errorMsg,
      tunti,
      outerClassName,
    } = this.props

    return (
      <div className={'pick_date form-group ' + outerClassName}>
        <label>{label}</label>
        <div className="d-flex ">
          <select
            value={ajankohta}
            onChange={this.handleDayChange}
            className={
              'custom-select date noFocus noBorder sw-input radius-left-0'
            }
          >
            {(ajankohtaData &&
              ajankohtaData.length &&
              ajankohtaData.map((day, i) => (
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
        {error ? <div className="invalid-feedback">{errorMsg}</div> : null}
      </div>
    )
  }
}

DateHourInput.propTypes = {
  label: PropTypes.string,
  ajankohta: PropTypes.string,
  ajankohtaData: PropTypes.array,
  label: PropTypes.string,
  tunti: PropTypes.bool,
  error: PropTypes.object,
  errorMsg: PropTypes.string,
  onChange: PropTypes.func,
  outerClassName: PropTypes.string,
}

export default DateHourInput
