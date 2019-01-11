import React from 'react'
import {Trans} from '@lingui/react'
import Aloitus from './ota_yhteytta';
class OtaYhteytta extends React.PureComponent {
  state = {
    activeSection: null,
  }

  render() {
    const {activeSection} = this.state

    return (
      <div>
          <Aloitus/>
      </div>
    )
  }
}

export default OtaYhteytta
