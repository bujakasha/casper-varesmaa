import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {Trans} from '@lingui/react'
const Header = ({toggleMessage,homelink}) => (
  <div id="work_with_me" className="container col-xl-10">
    <div className="row">
      <div className="col-md-8 offset-lg-1">
        <div className="col">
          <h2 className="h2 font-weight-bold">
            <strong>
              <Trans id="work_cta_otsikko" />
            </strong>
          </h2>
          <p />
          <p>
            <Trans id="work_cta_teksti" />
            <br />
          </p>
        </div>
      </div>

      <div className="col-md-8 offset-md-1 mt-3 mt-md-5" />

      <div className="col-lg-7 offset-lg-1 mt-5 mt-lg-0">
        <div className="col-xl-11 ">
          <h4 className="h5 font-weight-">
            {' '}
            <strong>
              {' '}
              <Trans id="work_cta_verkkosivut_otsikko" />
            </strong>
          </h4>
          <p />
          <p>
            <Trans id="work_cta_verkkosivut_teksti" />
            <Link to={homelink+"tilaa-verkkosivut"}>
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

      <div className="col-lg-4 mt-5 mt-lg-0">
        <div className="col-xl-11 ">


        
            <div className="w-50">
              <p>
                <small>
                  <Trans id="Sähköposti" />
                </small>
                <br />
                casper.varesmaa@gmail.com
              </p>
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