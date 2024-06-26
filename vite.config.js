import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['micro-app'].includes(tag),
      }
    }
  })],
  base:
    process.env.NODE_ENV === "production"
      ? "/micro-app-feedback"
      : "/",
})
