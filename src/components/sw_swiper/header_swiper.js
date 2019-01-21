import React from 'react'
import PropTypes from 'prop-types'
import Swiper from 'react-id-swiper'
import BgZoom from '../zoom_img'
import Control from './swiper_controls'
import './_sw_swiper.scss'

class SwSwiper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updateCount: 0,
    }
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

  goToSlide = index => {
    if (this.swiper) {
      this.swiper.slideTo(index)
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoaded: true})
    }, this.props.delay || 200)
  }

  renderCard = (item, index, active) => {
    return (
      <div key={item.fluid.src}>
        <BgZoom
          alt={item.alt}
          isOpen={index === active}
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
          this.setState({
            updateCount: this.state.updateCount + 1,
          })
        },
      },
      renderNextButton: () => (
        <button className="swiper-button-next">Next</button>
      ),

      autoplay: {
        delay: (this.state.updateCount >= 2 && 10000) || 5000,
        disableOnInteraction: true,
      },
    }

    return (
      <div className="w-100 no-overflow-x">
        <Swiper
          {...params}
          style={{overflow: 'hidden'}}
          rebuildOnUpdate={(this.state.updateCount === 2 && true) || false}
          shouldSwiperUpdate={true}
          component={this.swiperContainer}
          ref={node => (node ? (this.swiper = node.swiper) : null)}
        >
          {swiperData.map((item, i) =>
            this.renderCard(
              item,
              i,
              (this.swiper && this.swiper.activeIndex) || 0
            )
          )}
        </Swiper>
        <Control
          slideTo={this.goToSlide}
          goNext={this.goNext}
          goPrev={this.goPrev}
          slides={Array(swiperData.length).fill(null)}
          activeIndex={this.swiper && this.swiper.activeIndex}
        />
      </div>
    )
  }
}

SwSwiper.propTypes = {
  swiperData: PropTypes.array.isRequired,
  delay: PropTypes.number,
}

export default SwSwiper
