import React from 'react'
import {Trans} from '@lingui/react'
import PropTypes from 'prop-types'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ValintaKortti = ({icon, otsikko, onClick, teksti}) => {
  return (
    <div
      onClick={onClick}
      className="card contact_card text-center py-4 hoverable px-md-4"
    >
      <FontAwesomeIcon icon={icon} size="4x" />
      <h3 className="h5 font-weight-bold mt-4"> {otsikko} </h3>
    </div>
  )
}

ValintaKortti.propTypes = {
  icon: PropTypes.obj,
  otsikko: PropTypes.string,
  teksti: PropTypes.string,
  valitse: PropTypes.func,
}

export default ValintaKortti

/*

    <button type="button"
          onClick={onClick}
         className="btn   btn-block btn-sm mt-3">
        Valitse
        </button>
        
        
        
        */
