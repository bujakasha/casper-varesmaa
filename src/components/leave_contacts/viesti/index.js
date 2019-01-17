import React from 'react'
import PropTypes from 'prop-types'
import {Trans} from '@lingui/react'
import MessageForm from './message_form'
import { Link  } from 'gatsby'
import '../_leave_contact.scss'

const ViestiView = props => {
  return (
    <div className="col-12 py-5">
      <div className="d-flex justify-content-between">
        <h3 className="modal-title font-weight-bold">
          {' '}
          <Trans id="viesti_otsikko" />{' '}
        </h3>
      </div>
      <p className="col-lg-6 px-0">
        {' '}
        <Trans id="viesti_teksti" />
        <Link to={props.homelink+'soittopyynto'} 
        replace
        className="text-lowercase">  <Trans id="soittopyynto_otsikko" /></Link>.
      </p>

      <br />
      <div>
        <MessageForm homelink={props.homelink}  />
      </div>
    </div>
  )
}

ViestiView.propTypes = {
  homelink: PropTypes.string.isRequired,
}

export default ViestiView
