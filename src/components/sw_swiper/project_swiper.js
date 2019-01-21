import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Swiper from 'react-id-swiper'
import {WithOverlay} from '../zoom_img'
import Control from './swiper_controls'
import './_sw_swiper.scss'

class ProjectSwiper extends React.Component {
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
      <div key={index + 'projekti-slide'} className="projekti">
        <Projekti key={index} {...item} />
      </div>
    )
  }

  render() {
    const {swiperData} = this.props

    const params = {
      slidesPerView: 'auto',
      centeredSlides: true,
      on: {
        slideChange: item => {
          this.setState({
            active: this.swiper && this.swiper.realIndex,
            updateCount: this.state.updateCount,
          })
        },
      },
      renderNextButton: () => (
        <button className="swiper-button-next">Next</button>
      ),
    }

    return (
      <div className="w-100  col-md-11offset-md-1px-0 mb-md-5">
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
        <div className="col-12 col-sm-9 col-md-7 col-lg-5 layout_area container">
          <Control
            showIfSm={true}
            slideTo={this.goToSlide}
            goNext={this.goNext}
            goPrev={this.goPrev}
            slides={Array(swiperData.length).fill(null)}
            activeIndex={this.swiper && this.swiper.activeIndex}
          />
        </div>
      </div>
    )
  }
}
ProjectSwiper.propTypes = {
  swiperData: PropTypes.array.isRequired,
  delay: PropTypes.number,
}

export default ProjectSwiper

export const Projekti = ({img, toimija, href, phoneImg, teksti, children}) => (
  <div>
    <WithOverlay
      imgClassName="projekti-tag border"
      imgStyle={{maxWidth: '500px'}}
      className="projekti-img"
      top
      alt={`projekti ${toimija}`}
      img={img}
    >
      <div className="d-flex align-items-center align-items-sm-end justify-content-end w-100">
        <div>
          <Img className="z-depth-1 phone-img" fluid={phoneImg.fluid} />
        </div>
      </div>
    </WithOverlay>

    <br />
    <div className="w-100 px-3 px-md-0 py-3">
      <h6 className="h5 font-weight-bold">
        {' '}
        <a
          className="text-dark"
          href={href}
          target="_blank"
          rel="noreferrer"
          title={`Link to ${toimija}`}
        >
          {toimija}
        </a>
      </h6>
      <p style={{maxWidth: '500px'}}>{teksti}</p>
    </div>
  </div>
)
Projekti.propTypes = {
  img: PropTypes.object,
  toimija: PropTypes.string,
  href: PropTypes.string,
  teksti: PropTypes.string,
}
