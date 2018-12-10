import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from "gatsby-image"

const Header = ({ images, children }) => (


    <div className="container">
    <div className="row">
       <div className="col-md-6">
        
            {children}

        </div>
        <div className="col-md-11 offset-md- py-5 ">
        <div className="row">
        {images&&images.length?
            images.slice(0,12).map((image,i)=>(
                image.node.childImageSharp&&
               <div key={i} className="col-4 col-md-3 text-center border py-3 px-4">
                <Img 
                style={{maxWidth:'325px'}}
                style={{maxWidth:'250px'}}
                fluid={image.node.childImageSharp.fluid} />
                </div>
            )):null}
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
