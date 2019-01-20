import React from 'react'
import {Trans} from '@lingui/react'
// import './_about_section.scss'
const AboutSection = () => (
  <div className="layout_area">
    <div id="about_section" className="container col-md-10 bg-secondary text-center text-md-left">
      <div className="row">
     
          
       <div className="col-lg-6">
          <div className="col-xl-11 px-0">
            <h5 className="h4 font-weight-bold ">
              <strong>
                <Trans id="about_nyt_otsikko" />{' '}
              </strong>{' '}
            </h5>
            <p className="pt-1">
              <Trans id="about_nyt_teksti" />
            </p>
          </div>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0">
          <div className="col-xl-11 px-0">
            <h3 className="h4 font-weight-bold">
              <strong>
                <Trans id="about_kehitys_otsikko" />{' '}
              </strong>{' '}
            </h3>
            <p className="pt-1">
              <Trans id="about_kehitys_teksti" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AboutSection
