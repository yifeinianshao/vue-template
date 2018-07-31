import vue from 'vue'
import app from './app'
import router from './router'
import store from './store'
import axios from './utils/axios'
import 'styl/reset'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faUser)
vue.component('font-awesome-icon', FontAwesomeIcon)

vue.prototype.$axios = axios

vue.config.productionTip = false

new vue({
  el: '#app',
  router,
  store,
  render: h => h(app)
})
