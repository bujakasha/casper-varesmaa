import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <div className="row">
    <div className="col-md-6 offset-md-5">
     < h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    
      <Link to="/page-2/">Go to page 2</Link>
      
      </div>
      
      </div>

  </Layout>
)

export default IndexPage
