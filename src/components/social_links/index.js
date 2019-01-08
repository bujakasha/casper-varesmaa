import {Link} from 'gatsby'
import React from 'react'
import './_social_links.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SocialLinks = ({children, className}) => (
  <div className={'social_links ' + className || ' d-flex '}>
    <a href="https://github.com/bujakasha" className="btn s_link">
      <FontAwesomeIcon
        icon={['fab', 'github']}
        size="2x"
        transform="shrink-5s"
      />
    </a>
    <a href="" className="btn s_link">
      <FontAwesomeIcon
        icon={['fab', 'facebook']}
        size="2x"
        transform="shrink-5s"
      />
    </a>
    <a href="https://www.instagram.com/bujakasha_/" className="btn s_link">
      <FontAwesomeIcon
        icon={['fab', 'instagram']}
        size="2x"
        transform="shrink-5s"
      />
    </a>
    <a href="https://fi.linkedin.com/in/casper-v%C3%A4resmaa-91b0b3155" className="btn s_link">
      <FontAwesomeIcon
        icon={['fab', 'linkedin']}
        size="2x"
        transform="shrink-5s"
      />
    </a>
  </div>
)

export default SocialLinks
