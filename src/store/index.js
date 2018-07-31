import vue from 'vue'
import vuex from 'vuex'
import shop from './modules/shop'

vue.use(vuex)

export default new vuex.Store({
  modules: {
    shop
  }
})
