import React from 'react'
import {Trans} from '@lingui/react'
import './_about_section.scss'



const AboutSection = () => (
  <>
  <div id="about_section" className="container col-md-10 bg-secondary ">
   
    <div className="row">
      <div className="col-12 pb-5">
        <h4 className="h1 font-weight-bold">
          <span className="text-primary">
            <Trans id="about_otsikko_start" />
          </span>{' '}
          <Trans id="about_otsikko_end" />
        </h4>
      </div>

      <div className="col-lg-6">
        <div className="col-xl-11 px-0">
          <h5 className="h5">
            <strong>
              <Trans id="about_nyt_otsikko" />{' '}
            </strong>{' '}
          </h5>
          <Trans id="about_nyt_teksti" />
        </div>
      </div>

      <div className="col-lg-6 mt-5 mt-lg-0">
        <div className="col-xl-11 px-0">
          <h3 className="h5">
            <strong>
              <Trans id="about_kehitys_otsikko" />{' '}
            </strong>{' '}
          </h3>
          <Trans id="about_kehitys_teksti" />
        </div>
      </div>
    </div>
  </div>
  </>
)

export default AboutSection
