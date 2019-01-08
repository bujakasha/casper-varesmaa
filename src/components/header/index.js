import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './_header.scss'
import BgZoom from '../bg_zoom'
import SwContainer from '../bg_carousel'
import SwSwiper from '../sw_swiper/header_swiper'

const Header = ({img, carouselImages, children}) => (
  <div className="col-md-10 container">
    <div className="row">
      <div className="order-1 order-md-0 col-md-4 col-md-6">{children}</div>
      <div className="pull-md-12 col-md-6 col-lg-5 offset-lg-1 px-0 px-sm-3">
        <SwSwiper swiperData={carouselImages} />
      </div>
    </div>
  </div>
)
/*
         <SwContainer className="header_image" images={carouselImages}/>

        <BgZoom className="header_image" delay={600} img={img} />
 */

export const HeaderTwisted = ({img, children}) => (
  <div className="col-md-10 container">
    <div className="row">
      <div className="col-md-6 col-lg-5  px-0 px-sm-3">
        <BgZoom className="header_image" delay={600} img={img} />
      </div>
      <div className="col-md-4 col-md-6">{children}</div>
    </div>
  </div>
)

export default Header
