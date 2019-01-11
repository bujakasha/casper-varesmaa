import React from 'react'
import {Trans} from '@lingui/react'
import ValintaKortti from './valinta_kortti'
import Soittopyynto from '../../leave_contacts/soitto/contact_form'

class OtaYhteytta extends React.PureComponent {
  state = {
    loadTime: null,
  }

  render() {
    const {isOpen} = this.props

    return (
      <div>
            <h3 className="modal-title font-weight-bold">
                {' '}
                <Trans id="Ota yhteyttä" />{' '}
              </h3>
                <p>Tavoitat minut parhaiten sähköpostilla tai jättämällä soittopyynnön.</p>

                <div className="col-12 col-md-10 pt-5 pb-3">
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Soittopyyntö</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Lähetä viesti</a>
                  </li>
               
                </ul>


                <div className="py-5 px-4">
                <Soittopyynto/>

                </div>
                </div>

            
                
           
      </div>
    )
  }
}

export default OtaYhteytta
