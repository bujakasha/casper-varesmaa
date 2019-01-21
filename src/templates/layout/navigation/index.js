import {Link} from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import Hamburger from './hamburger'
import Collapse from 'reactstrap/lib/Collapse'
import {getHomelink, prefix, deprefix} from '../../../i18n-config'
import {Trans} from '@lingui/react'
import './_navigation.scss'

class Navigation extends React.PureComponent {
  state = {
    isOpen: true,
    isSticky: false,
  }

  componentDidMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll, false)
  }
  componentDidUpdate(prevProps) {
    if (this.props.location && prevProps.location !== this.props.location) {
      this.setState({isOpen: false})
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    var heightToShow = window.innerHeight - 5
    var windowWidth = window.innerWidth

    if (window.pageYOffset > heightToShow && windowWidth > 992) {
      this.setState({isSticky: true})
    } else {
      this.setState({isSticky: false})
    }
  }

  toggle = () => {
    if (this.props.innerWidth < 992) {
      this.setState({
        isOpen: !this.state.isOpen,
      })
    }
  }

  render() {
    const {isOpen, isSticky} = this.state
    const {innerWidth, lang, location} = this.props

    const homelink = lang ? getHomelink(lang) : null
    const isSm = innerWidth < 992

    return (
      <div className={'sticky_box  ' + ((isSticky && ' sticky') || '')}>
        <div
          className={
            'navigation_container bg-white  ' +
            ((isSticky && ' animated slideInDown') || ' animated ')
          }
        >
          <div className={'col-md-10 container px-0 px-md-4    '}>
            <nav
              id="cv_navigation"
              className="navbar d-print-none bg-white navbar-light navbar-expand-lg"
            >
              {isSm ? (
                <div className="d-lg-none  mr-md-0 ml-lg-auto">
                  <Link
                    to={
                      (location.pathname.match(/soittopyynto/g) &&
                        homelink + 'viesti') ||
                      homelink + 'soittopyynto'
                    }
                    className={'btn btn-secondary btn-sm btn-simple '}
                    style={{minWidth: '160px'}}
                  >
                    <strong>
                      <Trans id="Ota yhteyttä" />{' '}
                    </strong>
                  </Link>
                </div>
              ) : null}

              {isSm ? (
                <div className="navbar-nav d-lg-none  ml-auto mr-2">
                  <div className="d-flex">
                    <Link
                      to={deprefix(location.pathname)}
                      className="nav-link px-1"
                      activeClassName="active"
                    >
                      {' '}
                      FI{' '}
                    </Link>
                    <span className="nav-link px-0"> | </span>
                    <Link
                      to={prefix('en') + deprefix(location.pathname)}
                      className="nav-link px-1 "
                      activeClassName="active"
                    >
                      {' '}
                      EN{' '}
                    </Link>
                  </div>
                </div>
              ) : null}

              {isSm ? (
                <div className="toggler d-lg-none">
                  <Hamburger
                    isOpen={isOpen}
                    className="dark-color"
                    toggle={this.toggle}
                  />
                </div>
              ) : null}

              <Collapse isOpen={isOpen} className="" navbar id="cv_navbar">
                <div className="navbar-nav ">
                  <Link
                    to={homelink}
                    onClick={this.toggle}
                    className="nav-item nav-link"
                    activeClassName="active"
                  >
                    <Trans id="kotisivu_page_link" />
                  </Link>
                  <Link
                    to={homelink + 'ansioluettelo'}
                    onClick={this.toggle}
                    className="nav-item nav-link"
                    activeClassName="active"
                  >
                    <Trans id="ansiluettelo_page_link" />
                  </Link>
                  <Link
                    to={homelink + 'tilaa-verkkosivut'}
                    className="nav-item nav-link"
                    onClick={this.toggle}
                    activeClassName="active"
                  >
                    <Trans id="tilaa_page_link" />
                  </Link>
                  <Link
                    to={homelink + 'tietoa'}
                    className="nav-item nav-link"
                    onClick={this.toggle}
                    activeClassName="active"
                  >
                    <Trans id="faq_page_link" />
                  </Link>
                </div>
              </Collapse>

              {!isSm ? (
                <div className="d-none d-lg-block  mr-4 ml-lg-auto">
                  <Link
                    to={
                      (location.pathname.match(/soittopyynto/g) &&
                        homelink + 'viesti') ||
                      homelink + 'soittopyynto'
                    }
                    className={'btn btn-secondary btn-sm btn-simple '}
                    style={{minWidth: '160px'}}
                  >
                    <strong>
                      <Trans id="Ota yhteyttä" />{' '}
                    </strong>
                  </Link>
                </div>
              ) : null}

              {!isSm ? (
                <div className="navbar-nav d-none d-lg-block mr-aut mr-4">
                  <div className="d-flex">
                    <Link
                      to={deprefix(location.pathname)}
                      className="nav-link px-1"
                      activeClassName="active"
                    >
                      FI{' '}
                    </Link>
                    <span className="nav-link px-0"> | </span>
                    <Link
                      to={prefix('en') + deprefix(location.pathname)}
                      className="nav-link px-1"
                      activeClassName="active"
                    >
                      {' '}
                      EN{' '}
                    </Link>
                  </div>
                </div>
              ) : null}
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

Navigation.propTypes = {
  innerWidth: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
}

export default Navigation
