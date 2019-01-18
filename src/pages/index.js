import React from 'react'
import {Link} from 'gatsby'
import {graphql} from 'gatsby'

import Header from '../components/header'
import MyStack from '../components/my_stack'
import MyProjects from '../components/my_projects'
import SkillsSection from '../components/skills'
import AboutSection from '../components/about_section'
import Social from '../components/work_cta'

import {Trans, I18n} from '@lingui/react'
import {t} from '@lingui/macro'
import SvgSection from '../components/svg_section'
import {SeoWithI18n} from '../components/seo'
/*
<h6 className="mb-3 h5 d-none">
                        <strong>
                          <Trans id="header_section_apu_otsikko" />
                        </strong>{' '}
                      </h6>

                      */
const IndexPage = props => {
    const {data, lang} = props
    const headerImage = data.headerImage && data.headerImage.childImageSharp
    const headerImage2 = data.headerImage2 && data.headerImage2.childImageSharp
    const headerImage3 = data.headerImage3 && data.headerImage3.childImageSharp

    const carouselImages = [
      {...headerImage},
      {...headerImage2},
      {...headerImage3},
    ]
    const isSm = props.innerWidth<768;
    return (
      <main>
        <I18n>
          {({i18n}) => (
            <>
              <SeoWithI18n
                title="etusivu_page_title"
                description="etusivu_page_description"
                />
              <div className="layout_area page_minheight">
                <Header isSm={isSm} img={headerImage.fluid} carouselImages={carouselImages}>
                  <div className="mt-md-5 pt-md-" >
                    <h1 className="h1 font-weight-bold">
                      <Trans id="header_section_otsikko" />
                      <br />
                      <strong className="text-primary">Casper Väresmaa</strong>
                    </h1>

                    <div className="col-lg-11 col-xl-10 px-0 mt-4 pt-1">
                      
                      <p style={{fontSize: '1.1em'}}>
                        <Trans id="header_section_teksti" />
                      </p>
                    </div>

                    <div className="w-100 py-3 py-md-4 mb-3"/>

                    <div>

                      <Link
                      to={props.homelink+'soittopyynto'}
                      title={i18n._(t`btn_title_yhteydenotto`)}
                      className="btn btn-secondary px-5 btn-simple"
                    >
                      <strong>
                        <Trans id="btn_tilaa_verkkosivut"/>
                       
                      </strong>
                    </Link>
                   
                      <br />

                      <a
                        href={lang==='en'?
                        "/casper-varesmaa-resume.pdf"
                        :"/casper-varesmaa-ansioluettelo.pdf"}
                        title={i18n._(t`btn_title_ansioluettelo`)}
                        style={props.lang==='fi'&&{minWidth:'270px'}||{}}
                        className="btn btn-outline-light btn-simple text-dark mt-3"
                      >
                       <Trans id="btn_lataa_ansioluettelo" />
                      </a>
                    </div>

                    <div className="w-100 py-3 py-md-3" />

               
                  </div>
                </Header>
              </div>

           
              <SvgSection className="padding-large">
                <AboutSection />
              </SvgSection>
              <div className="container col-md-10 my-5" />
            
              <div className="layout_area">
              <SkillsSection/>
              </div>

              {/*
              
                <SvgSection className="padding-large">
                <AboutSection />
              </SvgSection>
              <div className="container col-md-10 my-5" />
              <div className="container col-md-10 my-5" />
              <div className="container col-md-10 my-5" />
              <div className="container col-md-10 my-5" />
              
              
              
              <div className="layout_area">
                <MyStack isSm={isSm}>
                  <div className="text-center">
                    <h2 className="h2 font-weight-bold">
                      <strong>
                        <Trans id="myt_stack_otsikko" />
                      </strong>
                    </h2>
                    <p>
                      <Trans id="myt_stack_teksti" />
                    </p>
                  </div>
                </MyStack>
          </div>*/}
                <div className="w-100 d-none d-md-block " style={{
                  minHeight: '100px'
                  }} />
                <div className="layout_area">
               
              </div>

              <MyProjects>
                  <div className="layout_area mt-5 pt-5 mb-5 text-center">
                    <h3 className="h2 font-weight-bold">
                      <strong>
                      
                        <Trans id="my_works_teksti" />
                      </strong>
                    </h3>
               
                  </div>
                </MyProjects>
                  
                  <div className="container col-md-6" style={{padding: '100px 40px'}}>
                    
                  </div>
             
              <div className="layout_area">
                <Social homelink={props.homelink} />
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

    headerImage2: file(relativePath: {regex: "/kuvat/casper-chill.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    headerImage3: file(relativePath: {regex: "/kuvat/casper-katajanokka.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

/*


export const query = graphql`
  query {
    headerImage: file(relativePath: {regex: "/sup3.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    headerImage2: file(relativePath: {regex: "/dun.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    headerImage3: file(relativePath: {regex: "/kuvaaa.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
 <div className="w-100 d-none" style={{
                  minHeight: '200px',
                  backgroundImage: 'url(/curve2.svg)',
                  backgroundSize:'cover'
                  }} />

     <div className="dnone">
                      <SocialLinks />
                      <p>
                        <Trans id="Puhelin" />
                        <br />
                        <small>+358 453535 813</small>
                      </p>
                      <p>
                        <Trans id="Email" />
                        <br />
                        <small>Casper.varesmaa@gmail.com</small>
                      </p>
                    </div>
                    */