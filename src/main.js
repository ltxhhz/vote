import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import toast from './components/toast/index';

import './assets/bs-tools.css'
import './assets/paper.css';
// import 'papercss'

createApp(App)
.use(router)
.use(toast)
.mount('#app')
