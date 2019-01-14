import React from 'react'
import {Trans} from '@lingui/react'

const NotFoundPage = props => (
  <main>
    <div className="container col-md-10 pt-5 pl-md-5 ">
      <h1 className="font-weight-bold">
        {' '}
        <Trans id="not_found_otsikko" />
      </h1>

      <p>
        <Trans id="not_found_teksti" />
      </p>
    </div>
  </main>
)

export default NotFoundPage
