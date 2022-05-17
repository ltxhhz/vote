import * as vueRouter from 'vue-router'
import login from './components/login.vue'
import index from './pages/index.vue';
import create from './pages/create.vue';
import edit from './pages/edit.vue';
import manager from './pages/manager.vue';

/** @type {vueRouter.RouteRecordRaw[]} */
const routes = [{
  path: '/',
  component: index
},{
  path:'/create',
  component:create
},{
  path:'/edit',
  component:edit
},{
  path:'/manager',
  component:manager
}]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHashHistory(),
  routes
})

export default router