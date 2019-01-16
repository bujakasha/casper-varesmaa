import React from 'react'
import {Trans} from '@lingui/react'
import AboutSection from '../components/tilaa_section'
import {graphql} from 'gatsby'
import {SeoWithI18n} from '../components/seo'


const OrgerWebsitePage = props =>{
    return (
      <main className="page_minheight">
        <SeoWithI18n
        title="tilaa_page_title"
        description="tilaa_page_description"
        />
        <div className="container col-md-10 pt4 px-md-5">
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

        <AboutSection homelink={props.homelink} />
        <br />
    
      </main>
    )
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
