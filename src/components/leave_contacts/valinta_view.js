import React from 'react'
import Modal from 'reactstrap/lib/Modal'
import './_leave_contact.scss'
import {Trans} from '@lingui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Kortti from './valinta_kortti'

class LeavConactInfo extends React.PureComponent {
  state = {
    loadTime: null,
  }

  render() {
    const {isOpen} = this.props

    return (
      <div className="modal-body">
        <div className="d-flex justify-content-center">
          <h3 className="modal-title font-weight-bold"> Ota yhteyttä</h3>
        </div>

        <br />

        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6">
              <Kortti
                onClick={() => this.props.changeView(null, 1)}
                icon={['fal', 'envelope']}
                otsikko="Lähetä viesti"
              />
            </div>
            <div className="col-md-6">
              <Kortti
                onClick={() => this.props.changeView(null, 2)}
                icon={['fal', 'phone']}
                otsikko="Soittopyyntö"
              />
            </div>
          </div>
        </div>

        <div />
      </div>
    )
  }
}

export default LeavConactInfo

/*

      <p className="col-md-6 px-0">
              {' '}
              Valitse tapa jolla haluat ottaa yhteyttä.
            </p>
*/
