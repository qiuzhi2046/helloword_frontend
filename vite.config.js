import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

import Components from 'unplugin-vue-components/vite'; //按需引入蚂蚁组件
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';//按需引入蚂蚁组件
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
