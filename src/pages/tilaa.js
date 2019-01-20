import React from 'react'
import Tilaa from '../components/leave_contacts/tilaa/index'

const TilaaPage = props => (
  <main>
    <div className="container col-md-10 px-5 page_minheight ">
      <Tilaa homelink={props.homelink}/>
    </div>
  </main>
)

export default TilaaPage
