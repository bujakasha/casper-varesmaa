import React from 'react'
import PropTypes from 'prop-types'
import FormattedInput from '@buttercup/react-formatted-input'
import {telPattern, telPatternFin} from '../../../utils/forms'

const PhoneInput = props => {
  const {error, label, value, outerClassName} = props

  return (
    <div className={'form-group ' + outerClassName}>
      <label htmlFor="phone_input">{label}</label>
      <FormattedInput
        className={
          'sw-input noFocus noBorder form-control form-control-sm  ' +
          ((error && ' is-invalid') || '')
        }
        format={
          (value && value.match(/(^\+\(3|^3|^\+)/) && telPattern) ||
          telPatternFin
        }
        id="phone_input"
        value={value}
        name="puhelin"
        onChange={props.onChange}
      />
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  )
}

PhoneInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.object,
  outerClassName: PropTypes.string,
  onChange: PropTypes.func,
}

export default PhoneInput
