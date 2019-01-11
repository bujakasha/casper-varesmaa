import React from 'react'
import Modal from 'reactstrap/lib/Modal'
import ContactForm from './contact_form'
import '../_leave_contact.scss'
import {Trans} from '@lingui/react'

class LeavConactInfo extends React.PureComponent {
  state = {
    loadTime: null,
  }

  render() {
    const {isOpen} = this.props

    return (
      <Modal
        isOpen={isOpen!==false}
        size="lg"
        className="mt-5"
        toggle={this.props.toggle}
      >
        <div className="modal-content">
          <div className="modal-body">
            <div className="d-flex justify-content-between">
              <h3 className="modal-title font-weight-bold">
                {' '}
                <Trans id="soittopyynto_otsikko" />{' '}
              </h3>
              <div>
                <button
                  type="button"
                  className="btn btn-lg "
                  onClick={this.props.toggle}
                >
                  X
                </button>
              </div>
            </div>
            <p className="col-md-6 px-0">
              {' '}
              <Trans id="soittopyynto_teksti" />
            </p>

            <br />
            <div>
              <ContactForm closeModal={this.props.closeModal} />
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

export default LeavConactInfo

/*

    <div className="contact_form modal show ">

      <div className="modal-dialog modal-dialog-centered">
        <div className="form_container border">
          <h3>Jätä soittopyyntö</h3>
        
        </div>
      
      </div>
    </div>
    
    */
