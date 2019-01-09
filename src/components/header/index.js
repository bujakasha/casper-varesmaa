import PropTypes from 'prop-types'
import React from 'react'
import SwSwiper from '../sw_swiper/header_swiper'
import './_header.scss'

const Header = ({ carouselImages, children}) => (
  <div className="col-md-10 container">
    <div className="row">
      <div className="order-1 order-md-0 col-md-4 col-md-6">{children}</div>
      <div className="pull-md-12 col-md-6 col-lg-5 offset-lg-1 px-0 px-sm-3">
        <SwSwiper swiperData={carouselImages} />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  carouselImages: PropTypes.array.isRequired,
  children: PropTypes.object,
}

export default Header
