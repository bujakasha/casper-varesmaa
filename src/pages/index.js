import React from 'react'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import {Trans, I18n} from '@lingui/react'
import {t} from '@lingui/macro'
import SeoComponent from '../components/seo_component'

import HeaderSection from '../components/page_sections/header'
import SkillsSection from '../components/page_sections/skills'
import AboutSection from '../components/page_sections/about'
import HireMeSection from '../components/page_sections/hire_me'
import WaveSection from '../components/page_sections/wave'
import MyProjects from '../components/page_sections/projects'

const IndexPage = props => {
  const {data, lang} = props
  const headerImage = data.headerImage && data.headerImage.childImageSharp
  const headerImage2 = data.headerImage2 && data.headerImage2.childImageSharp
  const headerMobile = data.headerMobile && data.headerMobile.childImageSharp

  const carouselImages = [
    {
      ...headerImage,
      alt: 'Casper carrying sup board',
    },
    {
      ...headerImage2,
      alt: 'Casper with hoodie',
    },
  ]
  const isSm = props.innerWidth < 768
  return (
    <main>
      <I18n>
        {({i18n}) => (
          <>
            <SeoComponent
              title={i18n._(t`etusivu_page_title`)}
              description={i18n._(t`etusivu_page_description`)}
            />
            <div className="layout_area">
              <HeaderSection isSm={isSm} carouselImages={carouselImages}>
                <div className="mt-md-5 text-center text-md-left animated fadeIn fast">
                  {isSm === true && headerMobile && (
                    <div className="d-inline-block">
                      <Img
                        alt="Casper with hoodie"
                        fluid={headerMobile.fluid}
                        style={{minWidth: '200px',width:'90vw', maxWidth: '300px'}}
                        className="mb-4 rounded"
                        
                      />
                    </div>
                  )}

                  <h1 className="h1 font-weight-bold mt-3">
                    <Trans id="header_section_otsikko" />
                    <br />
                    <strong className="text-primary">Casper Väresmaa</strong>
                  </h1>

                  <div className="col-lg-11 col-xl-10 px-0 mt-4 pt-1">
                    <p style={{fontSize: '1.1em'}}>
                      <Trans id="header_section_teksti" />
                    </p>
                  </div>

                  <div className="w-100 py-3 py-md-4 mb-3" />

                  <div>
                    <Link
                      to={props.homelink + 'soittopyynto'}
                      title={i18n._(t`btn_title_yhteydenotto`)}
                      className="btn btn-secondary px-5 btn-simple"
                    >
                      <strong>
                        <Trans id="btn_tilaa_verkkosivut" />
                      </strong>
                    </Link>

                    <br />

                    <a
                      target="blank"
                      href={
                        lang === 'en'
                          ? '/casper-varesmaa-resume.pdf'
                          : '/casper-varesmaa-ansioluettelo.pdf'
                      }
                      title={i18n._(t`btn_title_ansioluettelo`)}
                      style={(props.lang === 'fi' && {minWidth: '270px'}) || {}}
                      className="btn btn-outline-light btn-simple text-dark mt-3"
                    >
                      <Trans id="btn_lataa_ansioluettelo" />
                    </a>
                  </div>
                </div>
              </HeaderSection>
            </div>

            <WaveSection>
              <AboutSection />
            </WaveSection>

            <div className="container col-md-10 my-5" />

            <div className="layout_area">
              <SkillsSection />
            </div>

            <div
              className="w-100 d-none d-md-block "
              style={{
                minHeight: '100px',
              }}
            />
            <div className="layout_area" />

            <MyProjects>
              <div className="layout_area mt-5 pt-5 mb-5 text-center">
                <h3 className="h2 font-weight-bold">
                  <strong>
                    <Trans id="my_works_teksti" />
                  </strong>
                </h3>
              </div>
            </MyProjects>

            <div
              className="container col-md-6"
              style={{padding: '100px 40px'}}
            />

            <div className="layout_area">
              <HireMeSection homelink={props.homelink} />
            </div>
            <div className="w-100" style={{minHeight: '60px'}} />
          </>
        )}
      </I18n>
    </main>
  )
}

export default IndexPage
export const query = graphql`
  query {
    headerImage: file(relativePath: {regex: "/kuvat/casper-sup-saimaa.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    headerMobile: file(relativePath: {regex: "/kuvat/casper-chill-wide.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    headerImage2: file(relativePath: {regex: "/kuvat/casper-chill.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
