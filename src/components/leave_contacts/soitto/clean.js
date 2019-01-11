import React from 'react'
import PropTypes from 'prop-types'
import {Trans} from '@lingui/react'
import ContactForm from './contact_form'

import '../_leave_contact.scss'

const SoittopyyntoView =(props)=>{

  return(
    <div className="modal-body animated fadeIn">
      <div className="d-flex justify-content-between">
        <h3 className="modal-title font-weight-bold">
          {' '}
          <Trans id="soittopyynto_otsikko" />{' '}
        </h3>
      </div>
      <p className="col-md-6 px-0">
        {' '}
        <Trans id="soittopyynto_teksti" />
      </p>

      <br />
      <div className="px-md-2">
        <ContactForm closeModal={props.changeView} />
      </div>
    </div>
  )

}

SoittopyyntoView.propTypes = {
  changeView: PropTypes.func.isRequired,
}

export default SoittopyyntoView
