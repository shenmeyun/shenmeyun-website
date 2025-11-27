<template>
  <div id="app">
    <TheHeader />
    <main>
      <router-view />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  /* 移除 scroll-behavior: smooth 以提升滚动性能 */
  /* 优化滚动性能 */
  -webkit-overflow-scrolling: touch;
  /* 启用硬件加速 */
  transform: translateZ(0);
  /* 优化滚动性能 */
  overscroll-behavior: contain;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1f2937;
  line-height: 1.6;
  background: #0f172a;
  /* 优化滚动性能 */
  overflow-x: hidden;
  /* 启用硬件加速 */
  transform: translateZ(0);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  /* 优化滚动性能 */
  contain: layout style;
  /* 启用硬件加速 */
  transform: translateZ(0);
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
}

input,
textarea {
  font-family: inherit;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
