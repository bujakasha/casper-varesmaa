import React from 'react'
import {Trans} from '@lingui/react'
import SocialLinks from '../social_links'
import PagePerformance from '../page_performance';
import './_footer.scss'
/*
<svg  viewBox="0 0 100 25">
 <defs>
      <pattern id="Wave"
             x="0" y="0" width="100" height="25"
             patternUnits="userSpaceOnUse" >
            <path d="M0 25 0 6C20 9 38 11 55 7 72 4 87 4 100 6l0 19z" id="path4" fill="#FFDD00"/>
      </pattern>
   </defs>
   
  <rect width="100%" height="100%" fill="url(#Wave)" />
</svg> 



  <svg viewBox="0 0 80 25">
    <defs>
      <pattern
        id="Wave"
        x="0"
        y="0"
        width="100"
        height="25"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M0 25 0 6C20 9 38 11 55 7 72 4 87 4 100 6l0 19z"
          id="path4"
          fill="#FFDD00"
        />
      </pattern>
    </defs>

    <rect width="100%" height="100%" fill="url(#Wave)" />
  </svg>
    <svg viewBox="0 -20 700 110" width="100%" height="110" preserveAspectRatio="none">
    <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#CEB964" />
    <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#00273F" />
  </svg>

  <svg viewBox="0 0 100 25">
    <defs>
      <pattern
        id="Wave"
        x="0"
        y="0"
        width="100"
        height="25"
        patternUnits="userSpaceOnUse"
      >
        <path
             transform="translate(0, -2)"
          d="M0 25 0 6C20 9 38 11 55 9 72 7 100 6 100 6l0 19z"
          id="path4"
          fill="#ffdd00b5"
        />

        <path
          d="M0 25 0 6C20 9 38 11 55 7 72 4 87 2 140 6l0 19z"
          id="path4"
          fill="#FFDD00"
        />
      </pattern>
    </defs>

    <rect width="100%" height="100%" fill="url(#Wave)" />
  </svg>
 */

const WaveSvg = ({children}) => (
  

  <svg viewBox="0 0 100 25">
    <defs>
      <pattern
        id="Wave"
        x="0"
        y="0"
        width="100"
        height="25"
        patternUnits="userSpaceOnUse"
      >
     
        <path
         transform="translate(0, -2)"
          d="M0 15 0 6C20 9 38 11 55 8 78 5 87 4 140 6l0 19z"
          id="path4"
          fill="#ffdd00b5"
        />

        <path
          d="M0 25 0 6C20 9 38 11 55 7 68 4 87 2 140 6l0 19z"
          id="path4"
          fill="#FFDD00"
        />
      </pattern>
    </defs>

    <rect width="100%" height="100%" fill="url(#Wave)" />
  </svg>

)

const Footer = ({children}) => (
  <div id="footer" className="w-100">
    <WaveSvg />

    <div className="inner">
      <div className="container px-5 text-center py4">
        <div className="col pl-2">
          <div>
            <img
              src="/kuvaaa.jpg"
              alt="Casper Väresmaa katajanokka"
              className="rounded-circle"
              width="100px"
            />
          </div>
          <div className="co mt-3">
            <h4>
              {' '}
              <strong>Casper Väresmaa </strong>
            </h4>
            <p>Helsinki, Kruunuhaka</p>
            <SocialLinks />
            
          </div>
        </div>

        <ul className="nav nav-dark  flex-column mt-5 mt-lg-2 col">
          <li className="nav-item">
            <a className="nav-link  " href="#">
              <Trans id="kotisivu_page_link" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Trans id="ansiluettelo_page_link" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Trans id="tilaa_page_link" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Trans id="Soittopyyntö" />
            </a>
          </li>
          
        </ul>
      </div>
      <div className="footer_padding" />
      <div className="w-100 text-center">
        <p className="mb-0 pb-3">
          <small> Tämän sivu päivitettiin viimeksi 20.4.2019. </small>
          <small />
        </p>
      </div>
    </div>
  </div>
)

export default Footer

/*
  <div
    id="footer"
    className="container  fast col-md-10"

  >
  <div className="col-12  w-100" style={{minHeight:'200px'}}>

        <nav className="navbar navbar-expand-lg text-center  navbar-light  py-4 border">
        <a className="navbar-brand w-100" href="#">
        <h5 className="mb-0 text-dark">Casper Väresmaa</h5>        
        <p className="text-muted"><small>Helsinki, Finland</small></p>
        </a>
    
          <ul className="navbar-nav ml-md-auto w-100 mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Kotisivu <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ansiluettelo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tilaa verkkosivut</a>
            </li>
          </ul>
        
      </nav>


  
  </div>
   
  </div>
        
        */
