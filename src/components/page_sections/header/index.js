import PropTypes from 'prop-types'
import React from 'react'
import SwSwiper from '../../sw_swiper/header_swiper'
import './_header_section.scss'

const Header = ({carouselImages, isSm, children}) => (
  <div className="col-md-10 container pt-5 pt-md-0">
    <div className="row">
      <div className="order-1 order-md-0 col-md-4 col-md-6 pt-4 pt-sm-0">
        {children}
      </div>
      {!isSm ? (
        <div className="pull-md-12 col-md-6 col-lg-5 offset-lg-1 px-0 px-sm-3">
          <SwSwiper swiperData={carouselImages} />
        </div>
      ) : null}
    </div>
  </div>
)

Header.propTypes = {
  carouselImages: PropTypes.array.isRequired,
  children: PropTypes.object,
  isSm: PropTypes.bool,
}

export default Header
