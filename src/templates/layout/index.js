import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import {I18nProvider} from '@lingui/react'
import {catalogs, langFromPath} from '../../i18n-config'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import Contact from '../../components/leave_contacts'

import LeaveContact from '../../components/leave_contacts/soitto'
import MessageContact from '../../components/leave_contacts/message'
import Transition from '../../components/Transition'
// import '@fortawesome/fontawesome-svg-core/styles.css';
import 'typeface-nunito-sans'

import '../../../fontawesome/library'
import '../../../sass/main.scss'
import './_layout.scss'

const Layout = props => {
  const {children, isContact, location, closeModal, lang, openModal} = props

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <body className={(isContact && 'nocroll modal-open') || ''}>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {name: 'description', content: 'Sample'},
              {name: 'keywords', content: 'sample, something'},
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Navigation
            lang={lang}
            location={location}
            isContact={isContact}
            toggleContact={openModal}
          />
          <div className="navigation_offset" />
          <div className={' layout_area_top'}>
          <Contact 
          isOpen={isContact}
          closeModal={openModal}
          toggle={closeModal}
          />
            
            <Transition location={location}>{children}</Transition>

          </div>
          <Footer lang={lang} location={location} />
        </body>
      )}
    />
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

class LayoutWithProvider extends React.Component {
  state = {
    isContact: false,
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      //  const WOW = require('wow.js')
      // new WOW().init()
    }
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.hashChange()
      window.addEventListener('hashchange', this.hashChange)
    }
  }
  componentDidUpdate(prevProps) {
    if (
      this.state.isContact == false &&
      this.props.parentIsContact &&
      this.props.parentIsContact !== prevProps.parentIsContact
    ) {
      this.openModal(this.props.parentIsContact)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.hashChange)
  }
  openModal = value => {
    this.setState({isContact: value || !this.state.isContact})
  }
  closeModal = () => {
    this.setState({isContact: false})
    if (typeof window !== 'undefined') {
      remove_hash_from_url()
    }
  }
  hashChange = () => {
    const {location} = this.props
    if (location && location.hash) {
      this.openModal(location.hash.replace('#', ''))
    }
  }

  render = () => {
    const {isContact} = this.state
    const lang = this.props.location
      ? langFromPath(this.props.location&&this.props.location.pathname)
      : 'fi'

    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {openModal: this.openModal})
    )
    console.log(this.props)

    return (
      <I18nProvider language={lang} catalogs={catalogs}>
        <Layout
          {...this.props}
          children={childrenWithProps}
          lang={lang}
          isContact={isContact}
          openModal={this.openModal}
          closeModal={this.closeModal}
        />
      </I18nProvider>
    )
  }
}

export default LayoutWithProvider

function remove_hash_from_url() {
  var uri = window.location.toString()
  if (uri.indexOf('#') > 0) {
    var clean_uri = uri.substring(0, uri.indexOf('#'))
    window.history.replaceState({}, document.title, clean_uri)
  }
}

/*
<LeaveContact
              isOpen={isContact && isContact !== 'viesti'}
              closeModal={openModal.bind(null, 'viesti')}
              toggle={closeModal}
            />
            <MessageContact
              closeModal={openModal.bind(null, true)}
              isOpen={isContact == 'viesti'}
              toggle={closeModal}
            />
             */