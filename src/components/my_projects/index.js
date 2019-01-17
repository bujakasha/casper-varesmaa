import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import './_my_projects.scss'
import {WithOverlay} from '../bg_zoom'
import {Trans, I18n} from '@lingui/react'
import {t} from '@lingui/macro'
import ProjektiSwiper from '../sw_swiper/project_swiper'
const MyProjects = ({images, children}) => (
  <StaticQuery
    query={graphql`
      query ProjektiQuery2 {
        sportteriImage: file(
          relativePath: {regex: "/projektit/sportteri.png/"}
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        sportteriImageMobile: file(
          relativePath: {regex: "/projektit/sportteri-mobile.png/"}
        ) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        seahorseImage: file(
          relativePath: {regex: "/projektit/ravintola-sea-horse.png/"}
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        seahorseImageMobile: file(
          relativePath: {regex: "/projektit/ravintola-sea-horse-mobile.png/"}
        ) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const sportteriImage =
        data.sportteriImage && data.sportteriImage.childImageSharp
      const sportteriImageMobile =
        data.sportteriImageMobile && data.sportteriImageMobile.childImageSharp

      const seahorseImage =
        data.seahorseImage && data.seahorseImage.childImageSharp
      const seahorseImageMobile =
        data.seahorseImageMobile && data.seahorseImageMobile.childImageSharp



      return (
        <div id="my_projects"  >
          <div className="col-md-8 offset-md-2">{children}</div>
          <I18n>
            {({i18n}) => {
              return (
                <>
                  <div className="col-md-12">
                    <div className="row">
                      <ProjektiSwiper
                        swiperData={[
                          {
                            img: seahorseImage && seahorseImage.fluid,
                            phoneImg: seahorseImageMobile,
                            toimija: 'Sea Horse',
                            teksti: i18n._(t`work_seahorse`),
                          },
                          {
                            img: sportteriImage && sportteriImage.fluid,
                            phoneImg: sportteriImageMobile,
                            toimija: 'Sportteri.fi',
                            teksti: i18n._(t`work_sportteri`),
                          }
                        ]}
                      />
                    </div>
                  </div>
                </>
              )
            }}
          </I18n>
        </div>
      )
    }}
  />
)

export default MyProjects
