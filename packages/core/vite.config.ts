/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";
import dts from 'vite-plugin-dts'

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
    vue(), // 添加UnoCSS插件
    Unocss(),
    vueJsx(),
    dts()
  ],
  build: {
    rollupOptions,
    minify: "terser",
    sourcemap: false, // 输出单独 source文件
    cssCodeSplit: true,
    lib: {
      // resolve(__dirname, './src/entry.ts')
      entry: resolve(__dirname, './src/entry.ts'),
      name: "PoiUI",
      fileName: "poi-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
