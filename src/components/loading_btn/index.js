import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './_loading_btn.scss'

const LoadingBtn = props => {
  const {label, onClick, type, className, isLoading} = props

  return (
    <button
      type={type || 'button'}
      className={'btn ' + className}
      onClick={onClick}
    >
      {(isLoading && <FontAwesomeIcon icon={['fal', 'spinner']} spin />) ||
        label}
    </button>
  )
}

LoadingBtn.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
}
export default LoadingBtn
