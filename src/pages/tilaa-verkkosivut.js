import React from 'react'
import {Trans} from '@lingui/react'
import Layout from '../components/layout'
import AboutSection from '../components/tilaa_section'
import {  graphql} from 'gatsby'


  class OrgerWebsitePage extends React.PureComponent {
    state = {
      showMessage: false,
    }
  
    toggleMessage = () => {
      this.setState({showMessage: 'soittopyyntö'})
    }
  
    render() {
      const { showMessage } = this.state;
  return (
    <Layout parentIsContact={showMessage} location={this.props.location}>
      <div className="container col-md-10 pt-4 px-md-5">
        <div className="row">
          <div className="col px5">
            <div className="mt-4 col-12 px-0">
              <h1 className="font-weight-bold">
                <Trans id="tilaa_page_otsikko" />
              </h1>

              <h5 className="text-muted">
                <Trans id="tilaa_page_otsikko_apu" />
              </h5>
              <br />
              <br />
              <p className="col-md-8 px-0">
                <Trans id="tilaa_page_teksti" />
              </p>
            </div>
          </div>
        </div>
      </div>

      <AboutSection toggleMessage={this.toggleMessage} />
      <br/>
      <div
        className="w-100 bg-liht d-none"
        style={{minHeight: '200px', marginTop: '', marginBottom: ''}}
      />
    </Layout>
  )
}
  }
export default OrgerWebsitePage

export const query = graphql`
  query {
    profileImage: file(relativePath: {regex: "/web.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
/*
            <p className="p-small d-flex justify-content-end"><small>Päivitetty: 20.12.2018</small></p>

'            */
