import React from 'react'
import PropTypes from 'prop-types'
import {Trans} from '@lingui/react'
import ContactForm from './contact_form'

const SoittopyyntoView = props => {
  return (
    <div className="modal-body animated fadeIn">
      <div className="d-flex justify-content-between">
        <h3 className="modal-title font-weight-bold">
          {' '}
          <Trans id="soittopyynto_otsikko" />{''}


        </h3>
      </div>
      <p className="col-md-6 px-0">
        {' '}
        <Trans id="soittopyynto_teksti" />
        <a href="#" onClick={props.changeView.bind(this,null,1)} className="text-lowercase">  <Trans id="viesti_otsikko" /></a>.
      </p>

      <br />
      <div className="">
        <ContactForm changeView={props.changeView} />
      </div>
    </div>
  )
}

SoittopyyntoView.propTypes = {
  changeView: PropTypes.func.isRequired,
}

export default SoittopyyntoView
