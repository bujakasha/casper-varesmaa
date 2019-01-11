import React from 'react'
import {Trans, withI18n} from '@lingui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './_tilaa_section.scss'
const TilaaSection = ({toggleMessage, i18n}) => (
  <div id="tilaa_section" className="container  col-md-10 px-md-5">
    <div className="row">
      <div className="col-lg-6 wowfadeIn" data-wow-offset="300">
        <div className="col-xl-11 px-0">
          <h5 className="mb-3">
            <strong>
              {' '}
              <Trans id="tilaa_section_verkkosivut_otsikko" />
            </strong>{' '}
          </h5>
          <p>
            <Trans id="tilaa_section_verkkosivut_teksti" />
          </p>
        </div>
      </div>

      <div className="col-lg-6 mt-5 mt-lg-0 wowfadeIn" data-wow-offset="300">
        <div className="col-xl-11 px-0">
          <h5 className="mb-3">
            <strong>
              {' '}
              <Trans id="tilaa_section_react_otsikko" />{' '}
            </strong>{' '}
          </h5>
          <p>
            <Trans id="tilaa_section_react_teksti" />
          </p>
        </div>
      </div>

      <div className="col-md-6 pt-4 wowfadeIn" data-wow-offset="200">
        <br />

        <a
          href="#soittopyyntö"
          className="btn btn-secondary px-5"
          onClick={toggleMessage}
        >
          {' '}
          <Trans id="btn_yhteydenotto" />{' '}
        </a>
      </div>
      <div className="col-md-6">
        <br />

        <p className="mb-1">
          {' '}
          <small>
            {' '}
            <Trans id="ota_yhteytta" />{' '}
          </small>
        </p>
        <div className="d-flex align-items-center mb-3">
          <FontAwesomeIcon
            icon={['fal', 'envelope']}
            size="1x"
            className="mr-2"
            transform="grow-2s"
          />
          <p className="mb-0"> Casper.varesmaa@gmail.com </p>
        </div>
      </div>
    </div>
  </div>
)
export default withI18n()(TilaaSection)

/*'


       <div className="row mt-5 d-none">
        <div className="px-3 d-flex text-center">
         <div className="text-center">
           <h5><strong> 0.7sek</strong> </h5>
            <p  className="text-muted"> Latausnopeus </p>
          </div>
        </div>
        <div className="co px-3 d-flex text-center">
         <div className="text-center">
           <h5><strong> 0€/kk</strong> </h5>
            <p  className="text-muted"> Ylläpitokustannukset </p>
          </div>
        </div>
        <div className="co px-3 d-flex text-center">
         <div className="text-center">
           <h5><strong> 5h </strong> </h5>
            <p  className="text-muted"> Työtunnit </p>
          </div>
        </div>
     
      
        </div>


        Hyödynnän avoimen lähdekoodin kirjastoja jolloin kehittäminen on joustavaa.
        hyödyntämällä avoimen lahdekoodin kirjastoja kehittämisestä saadaan kustannustehokasta ja joustavaa.
  
        Erityisesti osaamista löytyy tietokantaohjatuista verkkosovelluksista, Web kartta sovelluksista  
        Tarvittaessa verkkosovelluksesta saadaan erittäin hakukoneystävälinen edistyksellisen palvelinpuolen mallinnuksen avulla.
        


         Hyvin tehdyt verkkosivut ovat jokaisen toimijan elinehto, hakukoneiden valtaamassa maailmassa, jossa uniikkisisältö on parasta valuuttaa. Teen verkkosivuja yrityksille myynti, brändi ja käytettävyys edellä. 
        
        
        Teen henkilökohtaisia verkkosivuja työnhakuun, blogiksi, freelacereille tai näiden yhdistelmäksi.
        Hyvin tehdyt henkilkohtaiset verkkosivut tuovat , tuo kykysi esiin .
        Hyvin tehdyt henkilkohtaiset verkkosivut edistävät brädiäsi, tuovat lisää yhteydenottoja ja takaavat etumatkan työnhaussu.

         Teen henkilökohtaisia verkkosivuja freelancereille, 
         
         */
