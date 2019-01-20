import React from 'react'
import Soittopyynto from '../components/leave_contacts/soitto/index'


const SoittopyyntoPage = props => (
  <main>
    <div className="container col-md-10  px-md-5 page_minheight">
      <Soittopyynto homelink={props.homelink}/>
    </div>
  </main>
)

export default SoittopyyntoPage
