import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

import './_zoom_img.scss'

class ZoomImg extends React.Component {
  state = {
    isLoaded: false,
    status: 'loading',
  }
  componentDidMount() {
    if (!this.props.controlled || this.props.isOpen) {
      setTimeout(() => {
        this.setState({isLoaded: true})
      }, this.props.delay || 200)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.controlled && prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen === true) {
        setTimeout(() => {
          this.setState({isLoaded: this.props.isOpen})
        }, this.props.delay || 200)
      } else {
        this.setState({isLoaded: false})
      }
    }
  }
  toggle = () => {
    this.setState({isLoaded: !this.state.isLoaded})
  }

  render() {
    const {isLoaded} = this.state
    const {img, className, alt, contain} = this.props
    return (
      <div
        className={
          className +
          ' zoom-container bg-img px-0 ' +
          ((isLoaded && 'loaded ') || '')
        }
      >
        <Img
          alt={alt}
          fluid={img}
          critical={true}
          className={
            ((isLoaded && 'loaded ') || '') +
            ' bg-img zoom-img overlay-container ' +
            ((contain && 'contain ') || '')
          }
        />

        <div className="overlay white-slide" />
      </div>
    )
  }
}

ZoomImg.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  img: PropTypes.object.isRequired,
  contain: PropTypes.bool,
}

export default ZoomImg

export class WithOverlay extends React.Component {
  render() {
    const {className, imgClassName, children} = this.props
    return (
      <div className={className}>
        <div className={imgClassName}>
          <ZoomImg {...this.props} />
        </div>
        <div className="overlay d-flex content px-1 px-md-0">{children}</div>
      </div>
    )
  }
}

WithOverlay.propTypes = {
  imgClassName: PropTypes.string.isRequired,
  className: PropTypes.string,
}
