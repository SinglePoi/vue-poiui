import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    external: ["vue", "vue-router"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "PoiUI",
      fileName: "poi-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  }
})
