import React from 'react'
import {graphql} from 'gatsby'

import {Trans, I18n} from '@lingui/react'
import {t} from '@lingui/macro'

import {langFromPath} from '../i18n-config'
import SeoComponents from '../components/seo_component'
import BgZoom from '../components/zoom_img'

const AnsioluetteloPage = props => {
  const profileImage =
    props.data.profileImage && props.data.profileImage.childImageSharp
  const activeLang = langFromPath(props.location.pathname)
  const koulutusData =
    (activeLang && activeLang === 'en' && props.data.cvEnKoulutus.edges) ||
    props.data.cvKoulutus.edges
  const kokemusData =
    (activeLang && activeLang === 'en' && props.data.cvEnKokemus.edges) ||
    props.data.cvKokemus.edges
  const taidotData =
    (activeLang && activeLang === 'en' && props.data.cvEnTaidot.edges) ||
    props.data.cvTaidot.edges
  return (
    <main className="layout_area page_minheight">
      <I18n>
        {({i18n}) => (
          <>
            <SeoComponents
              title={i18n._(t`ansioluettelo_page_title`)}
              description={i18n._(t`ansioluettelo_page_description`)}
            />
            <div className="container col-md-10 pt-4">
              <div className="row">
                <div className="col-4 col-md-5 col-lg-4 col-xl-3 d-none d-print-block d-md-block">
                  <BgZoom
                    alt="Casper with hoodie"
                    className="profile_image"
                    delay={100}
                    img={profileImage && profileImage.fluid}
                  />
                </div>
                <div lassName="col">
                  <div className="px-3 mt-4">
                    <h1>
                      <strong>Casper Väresmaa</strong>
                    </h1>
                    <h5 className="text-muted pl-1">
                      <Trans id="ansioluettelo_page_apuotsikko" />
                    </h5>

                    <br />

                    <div className="px-2">
                      <div>
                        <p className="mb-0">
                          <small>
                            <Trans id="Sähköposti" />
                          </small>
                        </p>
                        <p>casper.varesmaa@gmail.com</p>
                      </div>

                     
                      <div>
                        <p className="mb-0">
                          <small>
                            <Trans id="Kotisivu" />
                          </small>
                        </p>
                        <p>www.casper-varesmaa.fi</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container col-md-10 pt-4 mt-5">
              <div>
                <h4 className="font-weight-bold">
                  <strong>
                    <Trans id="Koulutus" />
                  </strong>
                </h4>
                <hr />
                {koulutusData && koulutusData.length
                  ? koulutusData.map((item, i) => (
                      <ResumeSection key={item.node.id} {...item.node} />
                    ))
                  : null}
              </div>
            </div>
            <br />
           {activeLang && activeLang === 'en'&&<div className="d-none d-print-block w-100 py-5" />}

            <div className="container col-md-10 pt-5 my-5 mt-md-0">
              <div>
                <h4 className="font-weight-bold">
                  <Trans id="Kokemus" />
                </h4>
                <hr />
                {kokemusData && kokemusData.length
                  ? kokemusData.map((item, i) => (
                      <ResumeSection key={item.node.id} {...item.node} />
                    ))
                  : null}
              </div>
            </div>
     
        
                    <br/>
                    <br/>
            <div className="container col-md-10 pt-5 mt-5 pt-md-0 mt-md-0">
              <div>
                <h4 className="font-weight-bold">
                  <Trans id="Osaaminen" />
                </h4>
                <hr />
                <div className="col-12">
                  <div className="row">
                    {taidotData && taidotData.length
                      ? taidotData.map((item, i) => (
                          <ExprerienceSection
                            key={item.node.id}
                            {...item.node}
                          />
                        ))
                      : null}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </I18n>
    </main>
  )
}

export default AnsioluetteloPage

const ResumeSection = ({ajankohta, otsikko, toimija, teksti}) => {
  return (
    <div className="col-12 col-lg-10 py-4">
      <div className="row">
        <div className="col-md-3">
          <p className="text-muted mb-1 d-print-none">{ajankohta} </p>
        </div>
        <div className="col-md-3 d-none d-print-block">
          <p className="text-muted mb-1">
            <small>{ajankohta}</small>{' '}
          </p>
        </div>
        <div className="col-md">
          <h5 className="font--bold">
            <strong>{otsikko}</strong>
          </h5>
          <h6 className="text-primary"> {toimija} </h6>
          <p>{teksti}</p>
        </div>
      </div>
    </div>
  )
}

const ExprerienceSection = ({otsikko, toimija, teksti}) => {
  return (
    <div className="col-md-6 pt-4">
      <div className="row">
        <div className="col-md">
          <h5>
            <strong>{otsikko}</strong>
          </h5>
          <p>{teksti}</p>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {


    profileImage: file(relativePath: {regex: "/kuvat/casper-chill.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    cvKoulutus: allAnsioluetteloXlsxKoulutus {
      edges {
        node {
          id
          teksti
          toimija
          otsikko
          ajankohta
        }
      }
    }
    cvEnKoulutus: allAnsioluetteloXlsxEnKoulutus {
      edges {
        node {
          id
          teksti
          toimija
          otsikko
          ajankohta
        }
      }
    }
    cvKokemus: allAnsioluetteloXlsxKokemus {
      edges {
        node {
          id
          teksti
          toimija
          otsikko
          ajankohta
        }
      }
    }
    cvEnKokemus: allAnsioluetteloXlsxEnKokemus {
      edges {
        node {
          id
          teksti
          toimija
          otsikko
          ajankohta
        }
      }
    }
    cvTaidot: allAnsioluetteloXlsxTaidot {
      edges {
        node {
          id
          teksti
          otsikko
        }
      }
    }
    cvEnTaidot: allAnsioluetteloXlsxEnTaidot {
      edges {
        node {
          id
          teksti
          otsikko
        }
      }
    }
  }
`
