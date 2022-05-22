import * as vueRouter from 'vue-router'
import login from './components/login.vue'
import index from './pages/index.vue';
import create from './pages/create.vue';
import edit from './pages/edit.vue';
import manager from './pages/manager.vue';

/** @type {vueRouter.RouteRecordRaw[]} */
const routes = [{
  name:'index',
  path: '/',
  component: index,
  meta:{
    title:'投票的网'
  }
},{
  name:'create',
  path:'/create',
  component:create,
  meta:{
    title:'创建投票'
  }
},{
  name:'edit',
  path:'/edit/:uuid?',
  component:edit,
  meta:{
    title:'编辑投票'
  }
},{
  name:'manager',
  path:'/manager',
  component:manager,
  meta:{
    title:'投票管理'
  }
}]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHashHistory(),
  routes
})

export default router