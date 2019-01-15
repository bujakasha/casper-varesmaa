import PropTypes from 'prop-types'
import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Collapse from 'reactstrap/lib/Collapse'
import Image from './brand'
import './_my_stack.scss'
import {Trans} from '@lingui/react'

class Brands extends React.PureComponent {
  state = {
    showAll: false,
  }

  toggle = () => {
    this.setState({showAll: !this.state.showAll})
  }

  render() {
    const {showAll} = this.state
    const {children} = this.props
    return (
      <div id="my_stack" className="container col-md-10">
        <div className="row">
          <div className="col-md-8 offset-md-2">{children}</div>
          <div className="col-md-12 pt-5">
            <StaticQuery
              query={graphql`
                query BrandDataQuery {
                  sprite: allSpriteImagesXlsxTaul1 {
                    edges {
                      node {
                        id
                        className
                        data
                      }
                    }
                  }
                }
              `}
              render={data => {
                if (!data.sprite && data.sprite.edges) {
                  return null
                } 
                return (
                  <>
                    <div className="row">
                      {data.sprite.edges.slice(0, 12).map((brand, i) => (
                        <Image key={i+'brands'} {...brand.node} />
                      ))}
                    </div>
                    <Collapse isOpen={showAll}>
                      <div className="row">
                        {data.sprite.edges.slice(12, 40).map((brand, i) => (
                          <Image key={i+'brands-collapse'}  {...brand.node} />
                        ))}
                      </div>
                    </Collapse>
                  </>
                )
              }}
            />

            <div className="col-12 text-center text-lg-right">
              <button
                onClick={this.toggle}
                type="button"
                className="btn btn-sm mt-3"
              >
                {' '}
                {(!showAll && <Trans id='Näytä enemmän' />) || <Trans id='Näytä vähemmän'/>}{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Brands.propTypes = {
  images: PropTypes.array,
  children: PropTypes.object,
}

export default Brands
