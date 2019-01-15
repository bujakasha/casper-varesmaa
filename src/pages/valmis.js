import React from 'react'
import {Trans} from '@lingui/react'
import Valmis from '../components/leave_contacts/valmis/index'


const ValmisPage = props => {
console.log(props)

  return(
  <main>
    <div className="container col-md-10">
      <Valmis homelink={props.homelink} changeView={()=>console.log('lol')}/>
    </div>
  </main>
)

  }
export default ValmisPage
