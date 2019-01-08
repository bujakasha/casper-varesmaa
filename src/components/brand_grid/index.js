import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './_brand_grid.scss'
import Img from 'gatsby-image'
import Controls from '../bg_carousel/sw_controls'

class BrandGrid extends React.PureComponent {
  state = {
    showAll: false,
  }

  toggle = () => {
    this.setState({showAll: !this.state.showAll})
  }

  render() {
    const {showAll} = this.state
    const {images} = this.props
    const array = showAll ? images : images.slice(0, 12)
    return (
      <div className={'col-12 '}>
        <div className="row">
          {array && array.length
            ? array.map(
                (image, i) =>
                  image.node.childImageSharp && (
                    <Image key={i} fluid={image.node.childImageSharp.fluid} />
                  )
              )
            : null}
        </div>
        <div className="row ">
          <div className="col-12 text-right">
            <Controls />
            <button
              onClick={this.toggle}
              type="button"
              className="btn btn-sm mt-3"
            >
              {' '}
              {(!showAll && 'Näytä enemmän') || 'Näytä vähemmän'}{' '}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

BrandGrid.propTypes = {
  images: PropTypes.array,
}

export default BrandGrid

const Image = ({fluid}) => (
  <div className="col-4 col-md-3 d-flex align-items-center justify-content-center  text-center border py-3 px-4">
    <div>
      <Img
        className="img"
        //style={{maxWidth:'325px',minWidth:'200px'}}
        fluid={fluid}
      />
    </div>
  </div>
)

Image.propTypes = {
  fluid: PropTypes.obj,
}
