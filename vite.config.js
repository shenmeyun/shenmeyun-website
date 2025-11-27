import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2, // 多次压缩以获得更好的效果
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // 将 vue 和 vue-router 分离
          if (id.includes('node_modules')) {
            if (id.includes('vue') && !id.includes('vue-router')) {
              return 'vue-vendor'
            }
            if (id.includes('vue-router')) {
              return 'router-vendor'
            }
            // 其他第三方库
            return 'vendor'
          }
        },
        // 优化 chunk 文件名
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // 启用 CSS 代码分割
    cssCodeSplit: true,
    // 提高 chunk 大小警告限制
    chunkSizeWarningLimit: 1000,
    // 启用 sourcemap（生产环境可关闭）
    sourcemap: false,
  },
  // 优化依赖预构建
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
})
