import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Hamburger from './hamburger'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Collapse from 'reactstrap/lib/Collapse'
import {getHomelink, prefix, deprefix} from '../../i18n-config'
import {Trans} from '@lingui/react'
import './_navigation.scss'

class Navigation extends React.PureComponent {
  state = {
    isOpen: false,
    isSticky: false,
  }

  componentDidMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll, false)
  }
  componentDidUpdate(prevProps){
    if(this.props.location&&prevProps.location!==this.props.location){
      this.setState({isOpen:false})
    }
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
    if(!window.innerWidth > 768){
      this.setState({
        isOpen: !this.state.isOpen,
      })
    }

  }

  render() {
    const {isOpen, isSticky} = this.state
    const {isContact, lang} = this.props

    const homelink = lang ? getHomelink(lang) : null

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
              className="navbar bg-white navbar-light navbar-expand-lg"
            >

          
              <div className="d-lg-none  mr-md-0 ml-lg-auto">
                <a
                  href="#soittopyynto"
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
                    width="20px"
                    className="mr-2"
                    style={{fontSize: '1em'}}
                  />
                  <strong>
                    <Trans id="Ota yhteyttä" />{' '}
                  </strong>
                </a>
              </div>

              <div className="navbar-nav d-lg-none  ml-auto mr-2">
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
                    to={homelink + 'faq'}
                    className="nav-item nav-link"
                    onClick={this.toggle}
                    activeClassName="active"
                  >
                    <Trans id="faq_page_link" />
                  </Link>
                 
                </div>
              </Collapse>

              <div className="d-none d-lg-block  mr-4 ml-lg-auto">
                <a
                  href="#soittopyynto"
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
                    style={{fontSize: '1em'}}
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
                    FI{' '}
                  </Link>
                  <a className="nav-link  px-0"> | </a>
                  <Link
                    to={prefix('en') + deprefix(this.props.location.pathname)}
                    className="nav-link px-1"
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
