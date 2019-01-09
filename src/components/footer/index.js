import React from 'react'
import {Link} from 'gatsby'
import {Trans} from '@lingui/react'
import SocialLinks from '../social_links'
import PagePerformance from '../page_performance';
import { getHomelink, prefix, deprefix} from '../../i18n-config'
import Img from 'gatsby-image'
import { StaticQuery, graphql} from 'gatsby'

import './_footer.scss'



const Footer = ({children, lang, data}) => {
  const homelink = lang ? getHomelink(lang) : null
 // const profileImage = data.profileImage && data.profileImage.childImageSharp
  console.log(data)

return(
  <div id="footer" className="w-100">
    <WaveSvg />

    <div className="inner">
      <div className="container px-md-5 text-center py-4 col-xl-10">
        <div className="d-xlflex">
          <div>
          <StaticQuery
              query={graphql`
                  query {
                    profileImage: file(relativePath: {regex: "/kuvaaa.jpg/"}) {
                      childImageSharp {
                        fixed(width: 120) {
                          ...GatsbyImageSharpFixed_withWebp_noBase64
                        }
                      }
                    }
                  }
              `}
              render={data => (
                <Img 
                alt="Casper Väresmaa katajanokka"
                className="rounded-circle"
                fixed={data.profileImage.childImageSharp.fixed}/>
              )
              } />
          </div>
          <div className="col pl-xl-4 mt-4 pt-1 mt-md-3">
            <h3>
              {' '}
              <strong>Casper Väresmaa </strong>
            </h3>
            <h5 className="pl-1 mt-md-3 mb-3">   Helsinki, Kruunuhaka</h5>
            <SocialLinks />
          
          </div>
        </div>
      
        <div className="col pl-md-5  pr-md-5">


       

        <div className="pt-5 col d-flex flex-wrap justify-content-center">
        <p>Verkkosivut</p>  <p className="mx-2">|</p> 
        <p>React.js sovellukset</p>  <p className="mx-2">|</p> 
         <p>Api-rajapinnat</p> <p className="mx-2">|</p> 
          <p>Hakukoneoptimointi</p>
        
        </div>
        <div className="text-center">
        <hr className="col-10 d-inline-block"/>

        </div>
      


        <ul className="nav nav-dark flex-olumn mt-5 mt-lg-0 col justify-content-center">
          <li className="nav-item">
            <Link to={homelink} className="nav-link  " href="#">
              <Trans id="kotisivu_page_link" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to={homelink + 'ansioluettelo'} className="nav-link" href="#">
              <Trans id="ansiluettelo_page_link" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to={homelink + 'tilaa-verkkosivut'} className="nav-link" href="#">
              <Trans id="tilaa_page_link" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to={homelink + 'faq'} className="nav-link" href="#">
              <Trans id="faq_page_link" />
            </Link>
          </li>
        </ul>
      </div>
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
}
export default Footer



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