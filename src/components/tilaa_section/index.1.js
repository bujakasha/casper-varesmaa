import React from 'react'
import {Trans, withI18n} from '@lingui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import './_tilaa_section.scss'
const TilaaSection = ({homelink, i18n}) => (
  <div id="tilaa_section" className="container  col-md-10 px-md-5">
    <div className="row">
      <div className="col-lg-6">
        <div className="col-xl-11 px-0">
          <h5 className="mb-3">
            <strong>
              {' '}
              <Trans id="tilaa_section_verkkosivut_otsikko" />
            </strong>{' '}
          </h5>
          <p>
            <Trans id="tilaa_section_verkkosivut_teksti" />
          </p>
        </div>
      </div>

      <div className="col-lg-6 mt-5 mt-lg-0 wowfadeIn" data-wow-offset="300">
        <div className="col-xl-11 px-0">
          <h5 className="mb-3">
            <strong>
              {' '}
              <Trans id="tilaa_section_react_otsikko" />{' '}
            </strong>{' '}
          </h5>
          <p>
            <Trans id="tilaa_section_react_teksti" />
          </p>
        </div>
      </div>

      <div className="col-md-6 pt-4 wowfadeIn" data-wow-offset="200">
        <br />

        <Link
          to={homelink+'soittopyynto'}
          className="btn btn-secondary px-5"
        >
          {' '}
          <strong><Trans id="btn_yhteydenotto" /></strong>{' '}
        </Link>
      </div>
      <div className="col-md-6">
        <br />

        <p className="mb-1">
          {' '}
          <small>
            {' '}
            <Trans id="ota_yhteytta" />{' '}
          </small>
        </p>
        <div className="d-flex align-items-center mb-3">
          <FontAwesomeIcon
            icon={['fal', 'envelope']}
            size="1x"
            className="mr-2"
            transform="grow-2s"
          />
          <p className="mb-0"> Casper.varesmaa@gmail.com </p>
        </div>
      </div>
    </div>
  </div>
)
export default withI18n()(TilaaSection)
