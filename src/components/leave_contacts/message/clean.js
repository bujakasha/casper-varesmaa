import React from 'react'
import PropTypes from 'prop-types'
import {Trans} from '@lingui/react'
import MessageForm from './message_form'
import '../_leave_contact.scss'

const ViestiView =(props)=>{
    return (

          <div className="modal-body animated fadeIn">
            <div className="d-flex justify-content-between">
              <h3 className="modal-title font-weight-bold">
                {' '}
                <Trans id="viesti_otsikko" />{' '}
              </h3>
            </div>
            <p className="col-md-6 px-0">
              {' '}
              <Trans id="viesti_teksti" />
            </p>

            <br />
            <div className="px-2">
              <MessageForm closeModal={props.changeView} />
            </div>
          </div>
  
    )
}

ViestiView.propTypes = {
  changeView: PropTypes.func.isRequired,
}


export default ViestiView
