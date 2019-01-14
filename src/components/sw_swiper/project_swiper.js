import React from 'react'
import PropTypes from 'prop-types'
import BgZoom, {WithOverlay} from '../bg_zoom'
import './_sw_swiper.scss'
import Swiper from 'react-id-swiper'
import Control from './swiper_controls'
import Img from 'gatsby-image'

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
      <div key={index} className="">
        <Projekti {...item} />
      </div>
    )
  }

  render() {
    const {swiperData} = this.props

    const params = {
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

    const activeItem =
      this.swiper && this.swiper.realIndex
        ? swiperData[this.swiper.realIndex]
        : swiperData[0]

    return (
      <div className="col-md-10 px-0 mb-md-5">
        <div className="row">
          <div className="col-md-6">
            {activeItem ? (
              <div className="w-100 animated fadeIn px-3 px-md-0 py-3 pt-4">
                <h6 className="h4 mb-3">
                  <strong> {activeItem.toimija}</strong>
                </h6>
                <p style={{maxWidth: '500px'}}>{activeItem.teksti}</p>
              </div>
            ) : (
              'null'
            )}
          </div>
          <div className="col-md-12">
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
            <div className="col-12">
              <Control
                slideTo={this.goToSlide}
                goNext={this.goNext}
                goPrev={this.goPrev}
                slides={Array(swiperData.length).fill(null)}
                activeIndex={this.swiper && this.swiper.activeIndex}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectSwiper

export const Projekti = ({img, toimija, phoneImg, teksti, children}) => (
  <div className="col-12">
    <WithOverlay
      imgClassName="projekti-tag z-depth1 border "
      imgStyle={{maxWidth: '500px'}}
      className="projekti-img "
      top
      img={img}
    >
      <div className="d-flex align-items-center align-items-sm-end justify-content-end w-100 ">
        <div>
          <Img className=" z-depth-1 phone-img" fluid={phoneImg.fluid} />
        </div>
      </div>
    </WithOverlay>
  </div>
)

Projekti.propTypes = {
  img: PropTypes.object,
  toimija: PropTypes.string,
  teksti: PropTypes.string,
}
