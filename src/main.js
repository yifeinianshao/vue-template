import vue from 'vue'
import app from './app'
import router from './router'
import store from './store'
import axios from './utils/axios'
import 'styl/reset'

vue.prototype.$axios = axios

vue.config.productionTip = false

new vue({
    el: '#app',
    router,
    store,
    render: h => h(app)
})
