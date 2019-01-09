import PropTypes from 'prop-types'
import React from 'react'
import './_input.scss'

const Input = props => {
  const {
    label,
    name,
    required,
    error,
    value,
    type,
    inputStyle,
    errorMsg,
    onChange,
    placeholder,
  } = props

  return (
    <div className="form-group ">
      <label for={`${name}Input`}>{label}</label>
      <div className="input-border " style={inputStyle}>
        <input
          type={type || 'text'}
          onChange={onChange}
          value={value}
          name={name}
          className={
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
}


export default Input

export const Textarea = props => {
  const {
    label,
    name,
    required,
    rows,
    value,
    error,
    inputStyle,
    errorMsg,
    onChange,
    placeholder,
  } = props

  return (
    <div className="form-group ">
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

Input.propTypes = {
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
}


