import React from 'react'
import {Trans} from '@lingui/react'
// import './_about_section.scss'
const AboutSection = () => (
  <div className="layout_area">
    <div id="about_section" className="container col-md-10 bg-secondary ">
      <div className="row">
     
     <div className="col-12 mb-4">
     <h5 className="h2 mb-4">
              <strong>
               Javascript-kehittäjä

              </strong>{' '}
            </h5>

     <p style={{fontSize:'1.1em'}}>

     <Trans id="about_nyt_teksti" />

     </p> 
     
     </div>
    
      </div>
    </div>
  </div>
)

export default AboutSection
