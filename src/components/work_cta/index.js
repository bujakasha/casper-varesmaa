import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {Trans} from '@lingui/react'
const Header = ({toggleMessage}) => (
  <div id="work_with_me" className="container col-md-10 offset-md-1">
    <div className="row">
      <div className="col-md-7">
        <div className="">
          <h2 className="h2 font-weight-bold">
            <Trans id="work_cta_otsikko" />
          </h2>
          <p />
          <p>
            <Trans id="work_cta_teksti" />
            <br />
          </p>
        </div>
      </div>

      <div className="col-12 mt-3 mt-md-5" />

      <div className="col-lg-7 mt-5 mt-lg-0">
        <div className="col-xl-11 px-0">
          <h4 className="h5 font-weight-bold">
            {' '}
            <Trans id="work_cta_verkkosivut_otsikko" />
          </h4>
          <p />
          <p>
            <Trans id="work_cta_verkkosivut_teksti" />
            <Link to="tilaa-verkkosivut">
              {' '}
              <Trans id="Lue lisää" />
            </Link>
            <br />
          </p>
          <br />
          <a
         
            href="#soittopyynto"
            onClick={toggleMessage}
            className="btn btn-secondary btn-sm btn-simple"
          >
            <strong>
              {' '}
              <Trans id="Soittopyyntö" />
            </strong>
          </a>
        </div>
      </div>

      <div className="col-lg-5 mt-5 mt-lg-0">
        <div className="col-xl-11 px-0">
          <h5 className="mb-3 d-none">
            <strong>
              {' '}
              <Trans id="Ota yhteyttä" />
            </strong>{' '}
          </h5>

          <div className="d-mdflex">
            <div className="w-50">
              <p>
                <small>
                  <Trans id="Sähköposti" />
                </small>
                <br />
                casper.varesmaa@gmail.com
              </p>
            </div>
           
          </div>

          <br />
        </div>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  images: PropTypes.array,
  children: PropTypes.object,
}

export default Header

