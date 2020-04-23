import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitterSquare, faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitterSquare)
library.add(faInstagramSquare)
library.add(faFacebookSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
