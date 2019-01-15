import React from 'react'
import {Trans} from '@lingui/react'
import Viesti from '../components/leave_contacts/viesti/index'


const ViestiPage = props => (
  <main>
    <div className="container  col-md-10 page_minheight ">
      <Viesti homelink={props.homelink}/>
    </div>
  </main>
)

export default ViestiPage
