import { Link } from 'gatsby'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SocialLinks = ({  children }) => (


    <div className="d-flex">
    <a href="#" className="btn  pl-0">
        <FontAwesomeIcon icon={['fab','github']} size="2x" transform="shrink-5s"/>
    </a>
    <a href="#" className="btn pl-0">
        <FontAwesomeIcon icon={['fab','facebook']} size="2x" transform="shrink-5s" />
    </a>
    <a href="#" className="btn pl-0">
        <FontAwesomeIcon icon={['fab','instagram']} size="2x" transform="shrink-5s"/>
    </a>
    <a href="#" className="btn pl-0">
        <FontAwesomeIcon icon={['fab','linkedin']} size="2x" transform="shrink-5s"/>
    </a>
    </div>



)

export default SocialLinks
