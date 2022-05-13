import * as vueRouter from 'vue-router'
import login from './components/login.vue'
import index from './pages/index.vue';
import create from './pages/create.vue';
import editVote from './pages/edit-vote.vue';

/** @type {vueRouter.RouteRecordRaw[]} */
const routes = [{
  path: '/',
  component: index
},{
  path:'/create',
  component:create
},{
  path:'/edit-vote',
  component:editVote
}]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHashHistory(),
  routes
})

export default router