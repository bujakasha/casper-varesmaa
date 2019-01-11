import React from 'react'
import Modal from 'reactstrap/lib/Modal'
import './_leave_contact.scss'
import {Trans} from '@lingui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Kortti from './valinta_kortti'

import Loadable from 'react-loadable';
import Loading from '../../my_components/loaders/spinner';

const LoadableSoitto = Loadable({
  loader: () => import('./soitto/clean'),
  loading: Loading,
});
const LoadableViesti = Loadable({
  loader: () => import('./message/clean'),
  loading: Loading,
});
const LoadableValinta= Loadable({
  loader: () => import('./valinta_view'),
  loading: Loading,
});

class LeavConactInfo extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeView: 2,
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.isOpen===false&&this.props.isOpen!==false){
      //this.setState({activeView:0})
    }
  }

  changeView=(hash, nextIndex)=>{
    if(hash==='soittopyynto'||nextIndex==2){
      this.setState({activeView:2})
    }else if(hash==='viesti'||nextIndex==1){
      this.setState({activeView:1})
    }else{
      this.setState({activeView:0})
    }
  }

  render() {
    const {isOpen} = this.props
    const { activeView } = this.state;
    return (
      <Modal
        isOpen={isOpen!==false}
        size="lg"
        className="mt-5"
        toggle={this.props.toggle}
      >
        <div className="modal-content">
              <div className="close-btn">
                <button
                  type="button"
                  className="btn btn-lg "
                  onClick={()=>this.props.closeModal(false)}
                >
                  <FontAwesomeIcon
                    icon={['fal','times']}
                    size="1x"
                   transform="grow-5s"
                  />
                </button>
              </div>
        
        {activeView==0&&<LoadableValinta changeView={this.changeView} />
        ||activeView==1&&
        <LoadableViesti changeView={()=>this.changeView('null',2)} />||
        activeView==2&&<LoadableSoitto changeView={()=>this.changeView('null',1)}/>||null}

     
        </div>
      </Modal>
    )
  }
}

export default LeavConactInfo


