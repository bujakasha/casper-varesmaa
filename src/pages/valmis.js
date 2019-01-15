import React from 'react'
import Valmis from '../components/leave_contacts/valmis/index'


const ValmisPage = props => {
  return(
  <main>
    <div className="container col-md-10">
      <Valmis homelink={props.homelink}/>
    </div>
  </main>
)

  }
export default ValmisPage
