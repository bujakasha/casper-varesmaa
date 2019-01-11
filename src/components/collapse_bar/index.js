import PropTypes from 'prop-types'
import React from 'react'
import Collapse from 'reactstrap/lib/Collapse'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './_collapse_bar.scss'

const CollapseBar = props => {
  const {title, isOpen, children, toggle} = props

  return (
    <div className="collapse_container">
      <div className="collapse_header">
        <button
          type="button"
          className="btn btn-block text-left pt-4"
          onClick={toggle}
        >
          <h5 className="text-dark font-weight-bold"> {title}</h5>
          <span className="ml-auto mr-3">
            {' '}
            <FontAwesomeIcon
              icon={['fas', 'plus']}
              size="1x"
              transform="grow-4"
            />
          </span>
        </button>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="collapse_body pb-5">{children}</div>
      </Collapse>
    </div>
  )
}

export default CollapseBar
