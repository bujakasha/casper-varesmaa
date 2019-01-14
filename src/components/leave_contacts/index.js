import React from 'react'
import Modal from 'reactstrap/lib/Modal'
import './_leave_contact.scss'
import {Trans} from '@lingui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Loadable from 'react-loadable'
//import Loading from '../../my_components/loaders/spinner';
const Loading = () => <div />
const LoadableSoitto = Loadable({
  loader: () => import('./soitto/index'),
  loading: Loading,
})
const LoadableViesti = Loadable({
  loader: () => import('./viesti/index'),
  loading: Loading,
})
const LoadableValmis = Loadable({
  loader: () => import('./valmis/index'),
  loading: Loading,
})
class LeavConactInfo extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeView: 2,
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.isOpen === false &&
      this.props.isOpen !== false &&
      this.state.activeView === 3
    ) {
      this.setState({activeView: 1})
    }
  }

  changeView = (hash, nextIndex) => {
    if (hash === 'soittopyynto' || nextIndex === 2) {
      this.setState({activeView: 2})
    } else if (hash === 'viesti' || nextIndex === 1) {
      this.setState({activeView: 1})
    } else if (nextIndex === 3) {
      this.setState({activeView: 3})
    } else {
      this.props.toggle()
    }
  }

  render() {
    const {isOpen} = this.props
    const {activeView} = this.state
    return (
      <Modal
        isOpen={isOpen !== false}
        size="lg"
        className="mt-5"
        toggle={this.props.toggle}
      >
        <div className="modal-content">
          <div className="close-btn">
            <button
              type="button"
              className="btn btn-lg "
              onClick={() => this.props.closeModal(false)}
            >
              <FontAwesomeIcon
                icon={['fal', 'times']}
                size="1x"
                transform="grow-5s"
              />
            </button>
          </div>
          {(activeView === 1 && (
            <LoadableViesti changeView={this.changeView} />
          )) ||
            (activeView === 2 && (
              <LoadableSoitto changeView={this.changeView} />
            )) ||
            (activeView === 3 && (
              <LoadableValmis closeModal={this.props.toggle} />
            )) ||
            null}
        </div>
      </Modal>
    )
  }
}

export default LeavConactInfo
