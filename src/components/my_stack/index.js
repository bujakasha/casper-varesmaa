import PropTypes from 'prop-types'
import React from 'react'
import BrandSwiper from '../sw_swiper/brand_swiper'
import brandArray from './stack_data';
import './_my_stack.scss'
import Img from 'gatsby-image'
/*
        <BrandSwiper swiperData={imagesColored} brands={brandArray} />

        */
const Header = ({images, imagesColored, children}) => {

return(
  <div id="my_stack" className="container col-md-10">
    <div className="row">
      <div className="col-md-6">{children}</div>
      <div className="col-md-11 pt-5">

      <BrandSwiper swiperData={imagesColored} brands={brandArray} />


      </div>
    </div>
  </div>
)
              }

Header.propTypes = {
  images: PropTypes.array,
  children: PropTypes.object,
}

export default Header




const Image = ({fluid,className,data}) => (
  <div className="col-4 col-md-3 d-flex img_container align-items-center justify-content-center text-center brder  ">
   <div>
      {fluid&& <Img className="img" fluid={fluid} />
      ||<img src={data} className={"img "+(className)}/>}
    
    </div>
  </div>
)

Image.propTypes = {
  fluid: PropTypes.obj,
}



const chunk = (arr, len) => {
  if (!arr) {
    return null
  }
  var chunks = [],
    i = 0,
    n = arr.length

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)))
  }

  return chunks
}
