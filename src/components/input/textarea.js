import PropTypes from 'prop-types'
import React from 'react'
import './_input.scss'

export const Textarea = props => {
  const {
    label,
    name,
    required,
    outerClassName,
    rows,
    value,
    error,
    inputStyle,
    errorMsg,
    onChange,
    placeholder,
  } = props

  return (
    <div className={'form-group ' + outerClassName}>
      <label for={`${name}Textarea`}>{label}</label>
      <div className="input-border " style={inputStyle}>
        <textarea
          type={'text'}
          rows={rows}
          name={name}
          onChange={onChange}
          value={value}
          className={
            'form-control noFocus sw-input ' + ((error && 'is-invalid') || '')
          }
          id={`${name}Textarea`}
          required={required}
          placeholder={placeholder}
        />
        {error ? (
          <div className="invalid-feedback">{errorMsg || error}</div>
        ) : null}
      </div>
    </div>
  )
}

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.object,
  value: PropTypes.string,
  rows: PropTypes.number,
  inputStyle: PropTypes.object,
  errorMsg: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
}

export default Textarea
