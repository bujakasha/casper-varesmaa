import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './_bg_carousel.scss'
import SwPagination from './sw_pagination'
import SwControls from './sw_controls'
import BgZoom from '../bg_zoom'

class SwComponent extends React.PureComponent {
  state = {
    isLoaded: false,
    status: 'loading',
  }
  componentDidMount() {
    this.setState({activeImage: 0})
  }
  changeImage = activeImage => {
    this.setState({activeImage})
  }

  toggle = () => {
    this.setState({isLoaded: !this.state.isLoaded})
  }

  render() {
    const {activeImage, status} = this.state
    const {img, className, images} = this.props

    return (
      <div className={'sw_container bg-ark '}>
        <div className={className}>
          {images &&
            images.length &&
            images.map(
              (e, i) =>
                (i == activeImage && (
                  <BgZoom className="header_image" delay={200} img={e.fluid} />
                )) ||
                null
            )}
        </div>
        <div className="sw_control_container d-flex justify-content-end">
          <SwControls
            count={images && images.length}
            activeImage={activeImage}
          />
        </div>
      </div>
    )
  }
}

SwComponent.propTypes = {
  siteTitle: PropTypes.string,
  contain: PropTypes.bool,
  top: PropTypes.bool,
}

export default SwComponent

/*
        <SwPagination changeImage={this.changeImage} count={images&&images.length} activeSlide={activeImage}/>

*/
