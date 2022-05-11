import { createApp } from 'vue'
import App from './App.vue'
import pencil from "./components/pencil";
import router from './router.js'

import './assets/bs-tools.css'
import 'papercss'

createApp(App)
.use(router)
.use(pencil)
.mount('#app')
