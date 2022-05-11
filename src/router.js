import * as vueRouter from 'vue-router'
import login from './components/login.vue'
import index from './pages/index.vue';

/** @type {vueRouter.RouteRecordRaw[]} */
const routes = [{
  path: '/',
  component: index
}/* ,{
  path:''
} */]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHashHistory(),
  routes
})

export default router