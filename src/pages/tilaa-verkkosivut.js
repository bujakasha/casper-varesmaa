import React from 'react'
import {Trans} from '@lingui/react'
import Layout from '../templates/layout'
import AboutSection from '../components/tilaa_section'
import {graphql} from 'gatsby'

class OrgerWebsitePage extends React.PureComponent {
  state = {
    showMessage: false,
  }

  toggleMessage = () => {
    this.setState({showMessage: 'soittopyyntö'})
  }

  render() {
    const {showMessage} = this.state
    return (
      <main>
        <div className="container col-md-10 pt4 px-md-5 page_minheight">
          <div className="row">
            <div className="col px5">
              <div className="mt-4 col-12 px-0">
                <h1 className="font-weight-bold">
                  <strong>
                    <Trans id="tilaa_page_otsikko" />
                  </strong>
                </h1>

                <h5 className="text-muted">
                  <Trans id="tilaa_page_otsikko_apu" />
                </h5>
                <br />
                <p className="col-md-8 px-0">
                  <Trans id="tilaa_page_teksti" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <AboutSection toggleMessage={this.toggleMessage} />
        <br />
        <div
          className="w-100 bg-liht d-none"
          style={{minHeight: '200px', marginTop: '', marginBottom: ''}}
        />
      </main>
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
