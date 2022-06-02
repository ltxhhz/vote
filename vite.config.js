import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const host = 'http://localhost:8080/vote'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    proxy:{
      '/api':host,
      '/image':host
    }
  }
})
