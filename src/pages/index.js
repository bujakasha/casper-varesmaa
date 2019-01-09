import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import MyStack from '../components/my_stack'
import MyProjects from '../components/my_projects'

import AboutSection from '../components/about_section'
// import SendMessage from '../components/send_message'
import SocialLinks from '../components/social_links'
import Social from '../components/work_cta'

import {Trans, I18n} from '@lingui/react'
import {t} from '@lingui/macro'
import SvgSection from '../components/svg_section'
/*
      <div className="w-100" style={{
          minHeight:'100px',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundImage: 'url(/middle-style-curve.svg)'
        }}
        />

        layout_area
         */
class IndexPage extends React.PureComponent {
  state = {
    showMessage: false,
  }

  toggleMessage = () => {
    this.setState({showMessage: 'soittopyyntö'})
  }

  render() {
    const {data} = this.props
    console.log(this.props)
    const {showMessage} = this.state
    const headerImage = data.headerImage && data.headerImage.childImageSharp
    const headerImage2 = data.headerImage2 && data.headerImage2.childImageSharp
    const logoImages = data.logoImages.edges
    const logoImagesColored = data.logoImages_colored.edges

    const carouselImages = [{...headerImage}, {...headerImage2}]
    return (
      <Layout parentIsContact={showMessage} location={this.props.location}>
        <I18n>
          {({i18n}) => (
            <>
            <div className="layout_area">
         
              <Header img={headerImage.fluid} carouselImages={carouselImages}>
                <div className="mt-md-5 pt-md-2">
                  <h1 className="h1 font-weight-bold">
                    <Trans id="header_section_otsikko" />
                    <br />
                    <strong className="text-primary">Casper Väresmaa</strong>
                  </h1>

                  <div className="col-lg-10 px-0 mt-4 mt-md-5">
                    <h6 className="mb-3 h5">
                      <strong>
                        <Trans id="header_section_apu_otsikko" />
                      </strong>{' '}
                    </h6>
                      
                    <p className="h" style={{fontSize:'1.1em'}}>
                      <Trans id="header_section_teksti" />
                    </p>
                  </div>

                  <div className="w-100 py-3 py-md-4" />

                  <div>
                    <a
                    onClick={this.toggleMessage} 
                      href="#soittopyyntö"
                      title={i18n._(t`btn_title_yhteydenotto`)}
                      className="btn btn-secondary  px-5 btn-simple "
                    >
                      <strong>
                        <Trans id="btn_yhteydenotto" />
                      </strong>
                    </a>
                    <br />

                    <Link
                      to="/ansioluettelo"
                      title={i18n._(t`btn_title_ansioluettelo`)}
                      className="btn btn-outline-light  btn-simple   text-dark  mt-3"
                    >
                      <Trans id="btn_ansioluettelo" />
                    </Link>
                  </div>

                  <div className="w-100 py-3 py-md-3" />

                  <div className="d-fex d-none">
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
                </div>
              </Header>
              </div>
              <SvgSection>
              <AboutSection/>

              </SvgSection>

              <div className="container col-md-10 py5 my-5" />
              <div className="container d-none col-md-10  my-5" />

              <MyStack imagesColored={logoImagesColored} images={logoImages}>
                <>
                  <h2 className="h2 font-weight-bold">
                    <Trans id="myt_stack_otsikko" />
                  </h2>
                  <p>
                    <Trans id="myt_stack_teksti" />
                  </p>
                </>
              </MyStack>
              <div className="w-100 py4 py-md5" />
              <MyProjects>
                <div className="mt-5 pt-5 mb-5">
                  <h3 className="h2 font-weight-bold">
                    <Trans id="my_works_otsikko" />
                  </h3>
                  <p>
                    <Trans id="my_works_teksti" />
                  </p>
                </div>
              </MyProjects>

              <div className="w-100" style={{minHeight: '100px'}} />

              <Social  toggleMessage={this.toggleMessage}  />
            </>
          )}
        </I18n>
      </Layout>
    )
  }
}

export default IndexPage
//    <MiddleCurve/>
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

    logoImages: allFile(
      filter: {relativePath: {regex: "/logoja/logoja/"}}
      sort: {fields: name, order: ASC}
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, grayscale: true) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }

    logoImages_colored: allFile(
      filter: {relativePath: {regex: "/logoja/logoja/"}}
      sort: {fields: name, order: ASC}
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }

  }
`

/*

  <div
          className="w-100"
          style={{minHeight: '200px'}}
        />*/
