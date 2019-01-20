import React from 'react'
import PropTypes from 'prop-types'
import {Trans} from '@lingui/react'
import MessageForm from './message_form'
import { Link  } from 'gatsby'
import '../_leave_contact.scss'

const TilaaView = props => {
  return (
    <div className="col-12 pt-5">
      <div className="d-flex justify-content-between">
        <h3 className="modal-title font-weight-bold">
          {' '}
          Pyydä tarjousta
        </h3>
      </div>
      <p className="col-lg-6 px-0">
        
       
      </p>

      <br />
      <div>
        <MessageForm homelink={props.homelink}  />
      </div>
      <br />

    </div>
  )
}

TilaaView.propTypes = {
  homelink: PropTypes.string.isRequired,
}

export default TilaaView
