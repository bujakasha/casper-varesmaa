import PropTypes from 'prop-types'
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './spin.scss';
const Spinner = props => {

  return (
    <div className="d-flex modal-content align-items-center justify-content-center">
        <FontAwesomeIcon
        icon={['fal','spinner']}
        size="3x"
        spin
        />
    </div>
  )
}


export default Spinner
