import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Lomake from './lomake'

import './_send_message.scss'
const SendMessage = ({toggle, isOpen}) => {
  return (
    <div id="message_box" className={(isOpen && 'open') || ''}>
      <div
        className={
          'container col-md-10 wow  depth-1 ' +
          ((isOpen && 'zoomIn') || 'zoomOut')
        }
      >
        <div className="inner-box">
          <div className="container">
            <div className="close_btn">
              <button type="button" onClick={toggle} className="btn mt-2 mr-3">
                <FontAwesomeIcon icon={['fal', 'times']} size="2x" />
              </button>
            </div>
            <h3 className="font-weight-bold"> Yhteydenotto </h3>
            <p> Lähetä vapaa viesti </p>
            <br />
            <Lomake />
          </div>
        </div>
      </div>
    </div>
  )
}
export default SendMessage
