import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const SeoComponents = props => {
  const {title, description, titleTemplate} = props
  return (
    <Helmet
      title={title || 'Verkkosivut'}
      titleTemplate={titleTemplate || 'Casper Väresmaa - %s'}
      meta={[
        {charset: 'utf-8'},
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'description',
          content:
            description ||
            'Teen upeita verkkosivuja ja suorituskykyisiä React.js web-sovelluksia',
        },
      ]}
    />
  )
}

SeoComponents.propTypes = {
  title: PropTypes.string.isRequired,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
}

export default SeoComponents
