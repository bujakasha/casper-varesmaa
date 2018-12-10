import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ img, children }) => (


    <div className="container">
    <div className="row">
       <div className="col-md-6">
        
            {children}

        </div>
        <div className="col-md-6">
        <div className="container-fluid bg-dark bg-img overlay-container"
            style={{
                minHeight:'650px',
                backgroundImage:`url(${img.src})`
                }}
                
            >
         
            </div>
        </div>
      </div>
    </div>



)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
