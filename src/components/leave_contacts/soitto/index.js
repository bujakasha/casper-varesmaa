import React from 'react'
import PropTypes from 'prop-types'
import {Trans} from '@lingui/react'
import ContactForm from './contact_form'
import { Link  } from 'gatsby'

const SoittopyyntoView = props => {
  return (
    <div className="col-12 py-5">
      <div className="d-flex justify-content-between">
        <h3 className="modal-title font-weight-bold">
          {' '}
          <Trans id="soittopyynto_otsikko" />{''}


        </h3>
      </div>
      <p className="col-md-6 px-0">
        {' '}
        <Trans id="soittopyynto_teksti" />
        <Link
         to={props.homelink + 'viesti'} 
         replace
         className="text-lowercase">  <Trans id="viesti_otsikko" /></Link>.
      </p>

      <br />
      <div className="">
        <ContactForm homelink={props.homelink} />
      </div>
    </div>
  )
}
SoittopyyntoView.propTypes = {
  homelink: PropTypes.string.isRequired,
}


export default SoittopyyntoView
