import React from 'react'
import PropTypes from 'prop-types'
import {Trans} from '@lingui/react'
import MessageForm from './message_form'
import { Link  } from 'gatsby'
import '../_leave_contact.scss'

const ViestiView = props => {
  return (
    <div className="col-12 pt-5">
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
      <br />
      <div className="col-md-6 mt-5 pt-5">
               <p className="mb-1"> <Trans id="gdbr_otsikko" /> </p>
               <p className="mb-md-0"> <small ><Trans id="gdbr_teksti" /> </small>  </p>
               </div>
    </div>
  )
}

ViestiView.propTypes = {
  homelink: PropTypes.string.isRequired,
}

export default ViestiView
