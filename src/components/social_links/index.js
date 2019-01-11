import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './_social_links.scss'

const SocialLinks = ({children, className}) => (
  <div className={'social_links ' + className || ' d-flex '}>
    <a
      href="https://github.com/bujakasha"
      title="Github bujakasha"
      className="btn s_link"
    >
      <FontAwesomeIcon
        icon={['fab', 'github']}
        size="2x"
        transform="shrink-5s"
      />
    </a>
    <a href="" title="Facebook Casper" className="btn s_link">
      <FontAwesomeIcon
        icon={['fab', 'facebook']}
        size="2x"
        transform="shrink-5s"
      />
    </a>
    <a
      href="https://www.instagram.com/bujakasha_/"
      title="Instagram Bujakasha_"
      className="btn s_link"
    >
      <FontAwesomeIcon
        icon={['fab', 'instagram']}
        size="2x"
        transform="shrink-5s"
      />
    </a>
    <a
      href="https://fi.linkedin.com/in/casper-v%C3%A4resmaa-91b0b3155"
      title="Linkedin"
      className="btn s_link"
    >
      <FontAwesomeIcon
        icon={['fab', 'linkedin']}
        size="2x"
        transform="shrink-5s"
      />
    </a>
  </div>
)

export default SocialLinks
