import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './_navigation.scss'
import Hamburger from './hamburger'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Collapse from 'reactstrap/lib/Collapse'
import { getHomelink, prefix, deprefix} from '../../i18n-config'
import {Trans} from '@lingui/react'

class Navigation extends React.PureComponent {
  state = {
    isOpen: false,
    isSticky: false,
  }

  componentDidMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll, false)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    var heightToShow = window.innerHeight - 5
    var windowWidth = window.innerWidth

    if (window.pageYOffset > heightToShow && windowWidth > 768) {
      this.setState({isSticky: true})
    } else {
      this.setState({isSticky: false})
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const {isOpen, isSticky} = this.state
    const {isContact, lang} = this.props

    const homelink = lang ? getHomelink(lang) : null

    return (
      <div className={'sticky_box  ' + ((isSticky && ' sticky') || '')}>
        {console.log(this.props)}

        <div
          className={
            'navigation_container bg-white  ' +
            ((isSticky && ' animated slideInDown') || ' animated ')
          }
        >
          <div className={'col-md-10 container px-0 px-md-4    '}>
            <nav
              id="cv_navigation"
              className="navbar bg-white navbar-light navbar-expand-lg"
            >



        <div className="d-lg-none  mr-md-0 ml-lg-auto">
                <a
                  href="#soittopyyntö"
                  onClick={this.props.toggleContact}
                  className={
                    'btn btn-secondary btn-sm btn-simple ' +
                    ((isContact && 'active') || '')
                  }
                  style={{minWidth: '160px'}}
                >
                  <FontAwesomeIcon
                    icon={['far', 'phone']}
                    size="1x"
                    className="mr-2"
                  />
                  <strong>
                    <Trans id="Ota yhteyttä" />{' '}
                  </strong>
                </a>
              </div>


<div className="navbar-nav d-lg-none  ml-auto mr-4">
                <div className="d-flex">
                  <Link
                    to={deprefix(this.props.location.pathname)}
                    className="nav-link px-1"
                    activeClassName="active"
                  >
                    {' '}
                    FI{' '}
                  </Link>
                  <a className="nav-link  px-0"> | </a>
                  <Link
                    to={prefix('en') + deprefix(this.props.location.pathname)}
                    className="nav-link px-1 "
                    activeClassName="active"
                  >
                    {' '}
                    EN{' '}
                  </Link>
                </div>
              </div>

<div className="toggler d-lg-none">
                <Hamburger
                  isOpen={isOpen}
                  className="dark-color"
                  toggle={this.toggle}
                />
              </div>

              <Collapse isOpen={isOpen} className="" navbar id="cv_navbar">
                <div className="navbar-nav ">
                  <Link
                    to={homelink}
                    className="nav-item nav-link"
                    activeClassName="active"
                  >
                    <Trans id="kotisivu_page_link" />
                  </Link>
                  <Link
                    to={homelink + 'ansioluettelo'}
                    className="nav-item nav-link"
                    activeClassName="active"
                  >
                    <Trans id="ansiluettelo_page_link" />
                  </Link>
                  <Link
                    to={homelink + 'tilaa-verkkosivut'}
                    className="nav-item nav-link"
                    activeClassName="active"
                  >
                    <Trans id="tilaa_page_link" />
                  </Link>
                  <Link
                    to={homelink + 'faq'}
                    className="nav-item nav-link"
                    activeClassName="active"
                  >
                    <Trans id="faq_page_link" />
                  </Link>
                </div>
              </Collapse>

              <div className="d-none d-lg-block  mr-4 ml-lg-auto">
                <a
                  href="#soittopyyntö"
                  onClick={this.props.toggleContact}
                  className={
                    'btn btn-secondary btn-sm btn-simple ' +
                    ((isContact && 'active') || '')
                  }
                  style={{minWidth: '160px'}}
                >
                  <FontAwesomeIcon
                    icon={['far', 'phone']}
                    size="1x"
                    className="mr-2"
                  />
                  <strong>
                    <Trans id="Ota yhteyttä" />{' '}
                  </strong>
                </a>
              </div>

              <div className="navbar-nav d-none d-lg-block mr-aut mr-4">
                <div className="d-flex">
                  <Link
                    to={deprefix(this.props.location.pathname)}
                    className="nav-link px-1"
                    activeClassName="active"
                  >
                    {' '}
                    FI{' '}
                  </Link>
                  <a className="nav-link  px-0"> | </a>
                  <Link
                    to={prefix('en') + deprefix(this.props.location.pathname)}
                    className="nav-link px-1 "
                    activeClassName="active"
                  >
                    {' '}
                    EN{' '}
                  </Link>
                </div>
              </div>

              


            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation
