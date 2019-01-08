import React from 'react'
import {Trans} from '@lingui/react'
import PropTypes from 'prop-types'

import {ControlArrow} from './sw_controls'
import Swiper from 'react-id-swiper'
import Img from 'gatsby-image'

import './_sw_swiper.scss'

class SwSwiper extends React.Component {
  constructor(props) {
    super(props)
    this.swiper = null
  }
  goNext = () => {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev = () => {
    if (this.swiper) this.swiper.slidePrev()
  }
/*
  renderCard = chunk => {
    return (
      <div className="col-12 h-10 bg-white">
        <div className="row">
          {chunk.map(
            (item, i) =>
              item.node.childImageSharp && (
                <Image key={i} fluid={item.node.childImageSharp.fluid} />
              )
          )}
        </div>
      </div>
    )
  }*/
  renderCard = chunk => {
    return (
      <div className="col-12 h-10 bg-white">
        <div className="row">
          {chunk.map(
            (item, i) =>
              item.className && (
                <Image key={i} data={item.data} className={item.className} />
              )
          )}
        </div>
      </div>
    )
  }

  render() {
    const {swiperData, brands} = this.props

    const params = {
      loop: true,
      speed: 800,
      on: {
        slideChange: item => {
          this.setState({active: this.swiper && this.swiper.realIndex})
        },
      },
    }
    let chunks = chunk(brands, 12)

    return (
      <div className="w-100">

        <Swiper
          {...params}
          shouldSwiperUpdate={true}
          component={this.swiperContainer}
          ref={node => (node ? (this.swiper = node.swiper) : null)}
        >
          {chunks.map((chunk, i) => this.renderCard(chunk))}
        </Swiper>
        <div className="sw_controls text-right">
          <ControlArrow direction="left" onClick={this.goPrev} />
          <ControlArrow direction="right" onClick={this.goNext} />
        </div>
      </div>
    )
  }
}

export default SwSwiper

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
