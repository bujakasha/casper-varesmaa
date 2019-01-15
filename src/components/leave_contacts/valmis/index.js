import React from 'react'
import {Trans} from '@lingui/react'
import {Link} from 'gatsby';

const ValmisView = props => (
  <div className="modal-body animated fadeIn d-flex justify-content-center align-items-center">
    <div className="justify-content-center text-center">
      <h3 className="modal-title font-weight-bold"> <Trans id="valmis_otsikko" /></h3>
      <p>    <Trans id="valmis_teksti" /> </p>
      <div>
        <Link
          to={props.homelink}
          className="btn bnt-sm btn-outline-primary btn-simple mt-4"
        >
          <Trans id="Palaa etusivulle" />
        </Link>
      </div>
    </div>
  </div>
)

export default ValmisView
