import React from 'react'
import {Trans} from '@lingui/react'
import TouchCarousel from 'react-touch-carousel'
import BgZoom from '../bg_zoom'
import {ControlArrow} from './sw_controls'
import './_sw_swiper.scss'
import Swiper from 'react-id-swiper'

class SwSwiper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.swiper = null
  }
  goNext = () => {
    if (this.swiper) {
      if (this.swiper.isEnd) {
        this.swiper.slideTo(0)
      } else {
        this.swiper.slideNext()
      }
    }
  }

  goPrev = () => {
    if (this.swiper) {
      if (this.swiper.isBeginning) {
        this.swiper.slideTo(
          this.props.swiperData && this.props.swiperData.length
        )
      } else {
        this.swiper.slidePrev()
      }
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoaded: true})
    }, this.props.delay || 200)
  }

  renderCard = (item, index, active) => {
    return (
      <div key={index} className="">
        <BgZoom
          isOpen={index == active}
          controlled={true}
          className="header_image"
          delay={200}
          img={item.fluid}
        />
      </div>
    )
  }

  render() {
    const {swiperData} = this.props

    const params = {
      on: {
        slideChange: item => {
          this.setState({active: this.swiper && this.swiper.realIndex})
        },
      },
      renderNextButton: () => (
        <button className="swiper-button-next">Next</button>
      ),
    }

    return (
      <div className="w-100">
        <Swiper
          {...params}
          shouldSwiperUpdate={true}
          component={this.swiperContainer}
          ref={node => (node ? (this.swiper = node.swiper) : null)}
        >
          {swiperData.map((item, i) =>
            this.renderCard(item, i, this.swiper && this.swiper.activeIndex)
          )}
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
