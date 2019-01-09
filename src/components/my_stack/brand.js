import PropTypes from 'prop-types'
import React from 'react'

import Img from 'gatsby-image'
import './_my_stack.scss'


const Image = ({fluid,className,data}) => (
  <div className="col-4 col-md-3 d-flex img_container align-items-center justify-content-center text-center">
   <div>
      {fluid&& <Img
      alt="tech logo"
       className="img" fluid={fluid} />
      ||<img src={data} className={"img "+(className)}/>}
    
    </div>
  </div>
)

Image.propTypes = {
  fluid: PropTypes.obj,
}

export default Image

