import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "./config/unocss";


const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
    assetFileNames: `style.css`,
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),// 添加UnoCSS插件
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      // resolve(__dirname, './src/entry.ts')
      entry: './src/entry.ts',
      name: "PoiUI",
      fileName: "poi-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  }
})
