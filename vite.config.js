import { defineConfig } from 'vite'
// vite.config.js
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // trate todas as tags com um traço como elementos personalizados
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })
  ]
}