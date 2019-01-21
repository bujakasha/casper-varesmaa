import PropTypes from 'prop-types'
import React from 'react'
import './_input.scss'

const Input = props => {
  const {
    label,
    name,
    required,
    className,
    outerClassName,
    error,
    value,
    type,
    inputStyle,
    errorMsg,
    onChange,
    onBlur,
    placeholder,
  } = props

  return (
    <div className={'form-group ' + outerClassName}>
      <label for={`${name}Input`}>{label}</label>
      <div className="input-border " style={inputStyle}>
        <input
          type={type || 'text'}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          name={name}
          className={
            `${className || ''} ` +
            'form-control noFocus form-control-sm sw-input ' +
            ((error && 'is-invalid') || '')
          }
          id={`${name}Input`}
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
Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.object,
  value: PropTypes.string,
  type: PropTypes.string,
  inputStyle: PropTypes.object,
  errorMsg: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
}

export default Input
