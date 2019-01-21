import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {Trans} from '@lingui/react'

const HireMeSection = ({homelink}) => (
  <div id="work_with_me" className="container pt-5mt-5">
    <div className="row">
      <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center">
        <h2 className="h2 font-weight-bold">
          <strong>
            <Trans id="hire_me_title" />
          </strong>
        </h2>
        <p />
        <p>
          <Trans id="hire_me_text" />
          <br />
        </p>

        <div>
          <Link
            to={homelink + 'soittopyynto'}
            className="btn btn-secondary btn-simple mt-3 mx-md-2"
          >
            {' '}
            <Trans id="Soittopyyntö" />{' '}
          </Link>

          <Link
            to={homelink + 'viesti'}
            className="btn btn-dark btn-simple mt-3 mx-md-2"
          >
            {' '}
            <Trans id="Lähetä viesti" />{' '}
          </Link>
        </div>
      </div>

      <div className="col-md-8 offset-md-1 mt-3 mt-md-5" />
    </div>
  </div>
)

HireMeSection.propTypes = {
  homelink: PropTypes.string.isRequired,
}

export default HireMeSection
