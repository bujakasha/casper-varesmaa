import React from 'react'
import {Trans} from '@lingui/react'

const ValmisView = props => (
  <div className="modal-body animated fadeIn d-flex justify-content-center align-items-center">
    <div className="justify-content-center text-center">
      <h3 className="modal-title font-weight-bold"> <Trans id="valmis_otsikko" /></h3>
      <p>    <Trans id="valmis_teksti" /> </p>
      <div>
        <button
          onClick={props.closeModal}
          type="button"
          className="btn bnt-sm btn-outline-primary btn-simple mt-4"
        >
          <Trans id="Sulje ikkuna" />
        </button>
      </div>
    </div>
  </div>
)

export default ValmisView
