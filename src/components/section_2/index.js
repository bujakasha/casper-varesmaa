import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Section = ({  children }) => (


    <div className="container-fluid d-flex justify-content-" style={{
        minHeight:'650px',
        }}>
        <div className="align-self-center">
            <h1 className="font-weight-bold"> <a href="#">Lyhyesti</a> kuka olen.  </h1>
            <p>    </p>

            <br/>
            <br/>
        <div className="row">
            <div className="col-4">
                <div className="col-md-11">
                <h6> <strong>Kehittäjänä</strong> </h6>
                <p>
                    Teen salaman nopeita verkkosivuja ja aplikaatiota.
                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                </div>
            </div>
         
            <div className="col-4">
                <div className="col-md-11">
                <h6> <strong>Kehittäjänä</strong> </h6>
                <p>
                    Teen salaman nopeita verkkosivuja ja aplikaatiota.
                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                </div>
            </div>
            <div className="col-4">
                <div className="col-md-11">
                <h6> <strong>Työntekijänä</strong> </h6>
                <p>
                    Teen salaman nopeita verkkosivuja ja aplikaatiota.
                    sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                </div>
            </div>
        </div>
        </div>
    </div>



)

Section.propTypes = {
  siteTitle: PropTypes.string,
}

Section.defaultProps = {
  siteTitle: '',
}

export default Section
