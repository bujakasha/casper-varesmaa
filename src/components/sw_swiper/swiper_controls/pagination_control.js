import React from 'react'
import PropTypes from 'prop-types'

const PaginationControl = ({index, active, onClick}) => (
  <span
    onClick={() => onClick(index)}
    className={'num ' + ((active === index && 'active') || '')}
  >
    {' '}
    0{index + 1}{' '}
  </span>
)

PaginationControl.propTypes = {
  index: PropTypes.number,
  active: PropTypes.number,
  onClick: PropTypes.func,
}
export default PaginationControl
