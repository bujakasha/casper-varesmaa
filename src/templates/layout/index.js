import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {StaticQuery, graphql} from 'gatsby'
import {I18nProvider} from '@lingui/react'
import {catalogs, langFromPath, getHomelink} from '../../i18n-config'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import Transition from '../../components/Transition'
import clickAnimation from  '../../components/MouseAnimation'

import 'typeface-nunito-sans'

import '../../../fontawesome/library'
import '../../../sass/main.scss'
import './_layout.scss'



const Layout = props => {
  const {children, innerWidth, isMounted, location,  lang} = props

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
        <>
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
            innerWidth={innerWidth}
          />
          <div className="navigation_offset" />
          <div className={' layout_area_top page_minheight'+(isMounted&&' loaded'||'')}>
        
         

            <Transition location={location}>{children}</Transition>
          </div>
          <Footer lang={lang} location={location} />
        </>
      )}
    />
      
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
/*
componentDidMount(){
  // Set delay in milliseconds
  window.pageExitTime = 1000
}*/

class LayoutWithProvider extends React.Component {
  state = {
    innerWidth:null,
    isMounted:false
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('click',clickAnimation);
      this.setState({isMounted:true})
    }
    
    this.handleResize()
    window.addEventListener('resize', this.handleResize, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleScroll)
  }
  handleResize = () => {
    var windowWidth = window.innerWidth
    this.setState({innerWidth:windowWidth})
  }
  render = () => {
    const { innerWidth, isMounted } = this.state;
    const lang = this.props.location
      ? langFromPath(this.props.location && this.props.location.pathname)
      : 'fi'
      const homelink = lang ? getHomelink(lang) : null

    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {innerWidth:innerWidth, homelink:homelink, lang:lang})
    )

    return (
      <I18nProvider language={lang} catalogs={catalogs}>
        <Layout
          {...this.props}
          isMounted={isMounted}
          children={childrenWithProps}
          lang={lang}
          innerWidth={innerWidth}
        />
      </I18nProvider>
    )
  }
}

export default LayoutWithProvider

