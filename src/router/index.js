import vue from 'vue'
import vueRouter from 'vue-router'
import MENUS from 'src/enums/MENUS'

vue.use(vueRouter)

const routes = MENUS.map(menu => {
  const name = menu.routeName
  const nameLowerCase = name.toLowerCase()
  const path = `/${ name === MENUS[0].routeName ? '' : nameLowerCase }`
  return {
    path,
    name,
    component: () => import(`src/pages/${ nameLowerCase }`)
  }
})

const router =  new vueRouter({
  // mode: 'history',
  routes
})

export default router
