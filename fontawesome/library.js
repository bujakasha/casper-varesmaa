
import { library, config } from '@fortawesome/fontawesome-svg-core'

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'

import { faEnvelope as falEnvelope } from '@fortawesome/pro-light-svg-icons/faEnvelope'
import { faPhone as falPhone } from '@fortawesome/pro-light-svg-icons/faPhone'
import { faTimes as falTimes } from '@fortawesome/pro-light-svg-icons/faTimes'
import { faHome as falHome } from '@fortawesome/pro-light-svg-icons/faHome'

import { faSpinner as falSpinner } from '@fortawesome/pro-light-svg-icons/faSpinner'

import { faPhone as farPhone } from '@fortawesome/pro-regular-svg-icons/faPhone'
import { faPlus as farPlus } from '@fortawesome/pro-regular-svg-icons/faPlus'

import { faPhone } from '@fortawesome/pro-solid-svg-icons/faPhone'
import { faPlus } from '@fortawesome/pro-solid-svg-icons/faPlus'

import { faLongArrowLeft  as falLongArrowLeft  } from '@fortawesome/pro-light-svg-icons/faLongArrowLeft'
import { faLongArrowRight  as falLongArrowRight  } from '@fortawesome/pro-light-svg-icons/faLongArrowRight'

library.add(
    faLinkedin,
    falLongArrowLeft,
    falLongArrowRight,
    falHome,
    falTimes,
    falEnvelope,
    falPhone,
    falSpinner,
    
  faFacebook,
  faInstagram,
  faGithub,

  farPhone,
  farPlus,


  faPhone,
  faPlus


)
//config.autoAddCss = false