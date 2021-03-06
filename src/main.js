import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './utils/axios'
import 'styl/reset'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
