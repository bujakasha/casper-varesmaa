import React from 'react'
import Modal from 'reactstrap/lib/Modal'
import MessageForm from './message_form'
import '../_leave_contact.scss'
import {Trans} from '@lingui/react'

class MessageInfo extends React.PureComponent {
  state = {
    loadTime: null,
  }

  render() {
    const {isOpen} = this.props

    return (
      <Modal
        isOpen={isOpen}
        size="lg"
        className="mt-5"
        toggle={this.props.toggle}
      >
        <div className="modal-content">
          <div className="modal-body">
            <div className="d-flex justify-content-between">
              <h3 className="modal-title font-weight-bold">
                {' '}
                <Trans id="viesti_otsikko" />{' '}
              </h3>
              <div className="">
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
              <Trans id="viesti_teksti" />
            </p>

            <br />
            <div>
              <MessageForm closeModal={this.props.closeModal} />
            </div>
          </div>
        </div>
      </Modal>
    )
  }
}

export default MessageInfo
