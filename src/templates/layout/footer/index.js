import React from 'react'
import {Link, StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import {Trans} from '@lingui/react'
import SocialLinks from '../../../components/social_links'
import {getHomelink} from '../../../i18n-config'
import './_footer.scss'

const Footer = ({lang}) => {
  const homelink = lang ? getHomelink(lang) : null
  return (
    <div id="footer" className="w-100 d-print-none">
      <FooterWaveSvg />

      <div className="inner">
        <div className="container px-md-5 text-center py-4 col-xl-10">
          <div className="d-xlflex">
            <div>
              <StaticQuery
                query={graphql`
                  query {
                    profileImage: file(relativePath: {regex: "/kuvaaa.jpg/"}) {
                      childImageSharp {
                        fixed(width: 120) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                    }
                  }
                `}
                render={data => (
                  <Img
                    alt="Casper Väresmaa katajanokka"
                    className="rounded-circle"
                    fixed={data.profileImage.childImageSharp.fixed}
                  />
                )}
              />
            </div>
            <div className="col pl-xl-4 mt-4 pt-1 mt-md-3">
              <h3>
                {' '}
                <strong>Casper Väresmaa </strong>
              </h3>
              <h5 className="pl-1 mt-md-3 mb-3"> Helsinki, Kruunuhaka</h5>
              <SocialLinks />
            </div>
          </div>

          <div className="text-center container">
            <Link
              to={homelink + 'soittopyynto'}
              className="btn btn-outline-dark btn-simple my-4"
            >
              {' '}
              <strong>
                <Trans id="Ota yhteyttä" />
              </strong>{' '}
            </Link>
          </div>
        </div>
        <div className="footer_padding" />
        <div className="w-100 text-center">
          <p className="mb-0 pb-3">
            <small>
              {' '}
              <Trans id="footer_updated" /> 20.4.2019.{' '}
            </small>
            <small />
          </p>
        </div>
      </div>
    </div>
  )
}
export default Footer

const FooterWaveSvg = ({children}) => (
  <svg viewBox="0 0 100 25">
    <defs>
      <pattern
        id="WaveFooter"
        x="0"
        y="0"
        width="100"
        height="25"
        patternUnits="userSpaceOnUse"
      >
        <path
          transform="translate(0, -2)"
          d="M0 15 0 6C20 9 38 11 55 8 78 5 87 4 140 6l0 19z"
          id="path5"
          fill="#ffdd00b5"
        />

        <path
          d="M0 25 0 6C20 9 38 11 55 7 68 4 87 2 140 6l0 19z"
          id="path4"
          fill="#FFDD00"
        />
      </pattern>
    </defs>

    <rect width="100%" height="100%" fill="url(#WaveFooter)" />
  </svg>
)
