import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ControlArrow = ({direction = 'right', onClick, isActive}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      title={`slide to ${direction}`}
      className={
        'btn noFocus btn-link mt-md-2 sw_control_arr ' +
        ((isActive && 'active') || 'disabed')
      }
    >
      <FontAwesomeIcon
        icon={['fal', `long-arrow-${direction}`]}
        size="2x"
        transform="shrink-3s"
      />
    </button>
  )
}

ControlArrow.propTypes = {
  direction: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
}
export default ControlArrow
