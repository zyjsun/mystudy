import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vitePluginImport from 'vite-plugin-babel-import';
// import VitePluginElementPlus from 'vite-plugin-element-plus'
import vueJxs from "@vitejs/plugin-vue-jsx"
import path from 'path'
const resolve = dir => path.resolve(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },
  server: {
    port: 8080,
    open: true,
    proxy: {}
  },
  plugins: [
    vue(),
    vueJxs(),
    // vitePluginImport([
    //   {
    //     libraryName: 'element-plus',
    //     libraryDirectory: 'es',
    //     style(name) {
    //       return `element-plus/lib/theme-chalk/${name}.css`;
    //     },
    //     ignoreStyles: []
    //   }
    // ]),
    // VitePluginElementPlus({
    //   // 如果你需要使用 [component name].scss 源文件，你需要把下面的注释取消掉。
    //   // 对于所有的 API 你可以参考 https://github.com/element-plus/vite-plugin-element-plus
    //   // 的文档注释
    //   // useSource: true,
    //   format: mode === 'development' ? 'esm' : 'cjs',
    // }),
  ]
})
