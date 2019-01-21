
import { library } from '@fortawesome/fontawesome-svg-core'

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faEnvelope as falEnvelope } from '@fortawesome/pro-light-svg-icons/faEnvelope'
import { faTimes as falTimes } from '@fortawesome/pro-light-svg-icons/faTimes'
import { faHome as falHome } from '@fortawesome/pro-light-svg-icons/faHome'
import { faSpinner as falSpinner } from '@fortawesome/pro-light-svg-icons/faSpinner'
import { faPlus } from '@fortawesome/pro-solid-svg-icons/faPlus'
import { faHome } from '@fortawesome/pro-solid-svg-icons/faHome'
import { faLongArrowLeft  as falLongArrowLeft  } from '@fortawesome/pro-light-svg-icons/faLongArrowLeft'
import { faLongArrowRight  as falLongArrowRight  } from '@fortawesome/pro-light-svg-icons/faLongArrowRight'

library.add(
    faLinkedin,
    falLongArrowLeft,
    falLongArrowRight,
    falHome,
    falTimes,
    falEnvelope,
    falSpinner,
    faInstagram,
    faGithub,
    faPlus,
    faHome,
)
//config.autoAddCss = false