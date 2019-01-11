import React from 'react'
import {Trans} from '@lingui/react'
import PropTypes from 'prop-types'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ValintaKortti = ({icon, otsikko, teksti}) => {
  return (
    <div className="card text-center border py-5">
        <FontAwesomeIcon
          icon={icon}
          size="4x"
        />
        <h3 className="h5 font-weight-bold mt-4"> Lähetä viesti </h3>
        <button type="button" className="btn btn-primary px-5 btn-sm mt-2">
        Valitse
        </button>
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
