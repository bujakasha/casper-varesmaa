import React from 'react'
import {getPageLoadTiemSecondsNumber} from '../../utils/browser'
import LazyLoad from 'react-lazyload'
import CountUp from 'react-countup'

class Performance extends React.PureComponent {
  state = {
    loadTime: null,
  }
  componentDidMount() {
    if (!this.state.loadTime) {
      this.setState({
        loadTime: getPageLoadTiemSecondsNumber(this.props.desimals),
      })
    }
  }

  render() {
    const loadTime = this.state.loadTime

    return (
      <LazyLoad>
        <CountUp decimals={1} end={loadTime} />
        {` ${this.props.endsWith}`}
      </LazyLoad>
    )
  }
}

export default Performance
