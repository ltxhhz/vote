import toast from './toast.vue';
import * as vue from 'vue';
import { createApp } from 'vue';

export default {
  /**
   * @param {vue.App} app
   */
  install(app) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    app.config.globalProperties.$toast = createApp(toast).mount(div).$show
  }
}