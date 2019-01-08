import React from 'react'
import Layout from '../components/layout'
import {Trans} from '@lingui/react'

const NotFoundPage = props => (
  <Layout location={props.location}>
    <div className="container col-md-10 pt-5 pl-md-5">
      <h1 className="font-weight-bold"> <Trans id="not_found_otsikko" /></h1>
   
      <p><Trans id="not_found_teksti" /></p>
    </div>
  </Layout>
)

export default NotFoundPage
