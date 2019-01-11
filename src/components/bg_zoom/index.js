import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

import './_bg_zoom.scss'

class BgZoom extends React.PureComponent {
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
      if (this.props.isOpen == true) {
        setTimeout(() => {
          this.setState({isLoaded: this.props.isOpen})
        }, this.props.delay || 200)
      } else {
        this.setState({isLoaded: false})
      }
    }
  }

  handleImageLoaded() {
    this.setState({status: 'loaded'})
  }
  handleImageErrored() {
    this.setState({status: 'failed to load'})
  }

  toggle = () => {
    this.setState({isLoaded: !this.state.isLoaded})
  }

  render() {
    const {isLoaded} = this.state
    const {img, className, contain, isOpen, controlled} = this.props
    const isVisivble = controlled === true ? isOpen : isLoaded
    return (
      <div
        onClick={this.toggle}
        className={
          className +
          ' zoom-container bg-img px-0 ' +
          ((isLoaded && 'loaded ') || '')
        }
      >
        <Img
          fluid={img}
          className={
            ((isLoaded && 'loaded ') || '') +
            ' bg-img zoom-img   overlay-container ' +
            ((contain && 'contain ') || '')
          }
        />

        <div className="overlay white-slide" />
      </div>
    )
  }
}

/*
    <div
          className={
            ((isLoaded && 'loaded ') || '') +
            ' bg-img zoom-img   overlay-container ' +
            ((contain && 'contain ') || '')
          }
          style={{
            backgroundImage: `url(${img && img.src})`,
          }}
        >
 
          <div className="overlay white-slide" />
        </div>
         */

BgZoom.propTypes = {
  siteTitle: PropTypes.string,
  contain: PropTypes.bool,
  top: PropTypes.bool,
}

export default BgZoom

export class WithOverlay extends React.PureComponent {
  render() {
    const {className, imgClassName, children} = this.props
    return (
      <div className={className + '  '}>
        <div className={imgClassName + ''}>
          <BgZoom {...this.props} />
        </div>
        <div className="overlay d-flex content px-4 px-md-0">{children}</div>
      </div>
    )
  }
}
