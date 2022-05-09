import * as vueRouter from 'vue-router'
import login from './components/login.vue'


/** @type {vueRouter.RouteRecordRaw[]} */
const routes = [{
  path: '/',
  component: login
}/* ,{
  path:''
} */]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHashHistory(),
  routes
})

export default router