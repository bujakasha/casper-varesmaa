import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'
import MyStack from '../components/my_stack'

import Section2 from '../components/section_2'
import SocialLink from '../components/social_links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//      <Header img={headerImage.fluid}/>

const IndexPage = (props) => {
  const headerImage = props.data.headerImage&&props.data.headerImage.childImageSharp
  const logoImages = props.data.logoImages.edges

  console.log({headerImage, logoImages})
  return (
    <Layout>

        <Header img={headerImage.fluid}>
           <div className="mt-5 pt-3">
            <h1 className="h1 font-weight-bold"> Hei! olen   <strong className="text-primary"> </strong>
            <br/>
            <strong className="text-primary">Casper Väresmaa</strong> </h1>

              <br/>

          <div className="col-md-10 px-0 mt-1">
          <p>
            Teen salaman nopeita verkkosivuja ja aplikaatiota.
            <br/>
             sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
            </p>

            </div>

        <br/>
        <br/>
        <br/>
        <a className="btn btn-secondary px-5 btn-simple "> <strong>CV - Ansioluettelo</strong> </a>
        <br/>
      
         <a href="#" className="btn btn-outline-light  btn-simple   text-dark  mt-3"> Näytä projekteja </a>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <SocialLink/>
        

        <small>
          
            <small> </small> 
            <FontAwesomeIcon icon={['fal','envelope']} />
            casper.varesmaa@gmail.com
      </small>
      

            </div>
        
        
        
        </Header>
        <br/>
        <br/>
        <br/>


        <MyStack images={logoImages} >
        <div className="mt-5 pt-5">

          <h2 className="h1 font-weight-bold"> Minun stackini </h2>
          <p> moderni verkkokehitys tarvitsee modernit työkalut </p>
        </div>


        </MyStack>
      <Section2/>

    </Layout>
  )
}

export default IndexPage


export const query = graphql`
  query {
    headerImage: file(relativePath: { regex: "/sup3.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },

    logoImages:  allFile(
      filter: { relativePath: { regex: "/logoja/" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
          
            fluid(maxWidth: 275,  grayscale: true) {
             
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

/*
  <a className="btn btn-outline-light px-5  btn-simple  mt-3">
         <strong>Ota yhteyttä</strong> 
         </a>
          */