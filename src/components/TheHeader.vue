<template>
  <header class="header header-dark" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <div class="logo" @click="$router.push('/')">
          <span class="logo-icon">☁️</span>
          <span class="logo-text">{{ t('nav.home') === '首页' ? '什么云科技' : 'ShenMeYun Tech' }}</span>
        </div>
        <nav class="nav" :class="{ active: mobileMenuOpen }">
          <router-link to="/" @click="closeMenu">{{ t('nav.home') }}</router-link>
          <router-link to="/about" @click="closeMenu">{{ t('nav.about') }}</router-link>
          <router-link to="/services" @click="closeMenu">{{ t('nav.services') }}</router-link>
          <router-link to="/cases" @click="closeMenu">{{ t('nav.cases') }}</router-link>
          <router-link to="/contact" @click="closeMenu">{{ t('nav.contact') }}</router-link>
        </nav>
        <div class="header-actions">
          <button class="lang-switch" @click="toggleLang">
            {{ currentLang === 'zh' ? 'EN' : '中文' }}
          </button>
          <button class="mobile-menu-btn" @click="toggleMobileMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, watch, computed, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from '@/composables/useI18n'

const { currentLang, t, setLang, initLang } = useI18n()
const route = useRoute()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

// 所有页面都使用深色背景

const toggleLang = () => {
  const newLang = currentLang.value === 'zh' ? 'en' : 'zh'
  setLang(newLang)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}

// 使用节流优化滚动事件处理
let scrollTimer = null
const handleScroll = () => {
  if (scrollTimer) {
    return
  }
  scrollTimer = requestAnimationFrame(() => {
    isScrolled.value = window.scrollY > 50
    scrollTimer = null
  })
}

onMounted(() => {
  initLang()
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // 初始检查
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (scrollTimer) {
    cancelAnimationFrame(scrollTimer)
  }
})

// 监听语言变化，更新HTML lang属性
watch(currentLang, (newLang) => {
  document.documentElement.lang = newLang === 'zh' ? 'zh-CN' : 'en'
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
}

/* 所有页面使用深色背景，与整体风格统一 */
.header-dark {
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.header-dark .nav a {
  color: rgba(255, 255, 255, 0.9);
}

.header-dark .logo {
  color: #ffffff;
}

.header-dark .nav a:hover,
.header-dark .nav a.router-link-active {
  color: #667eea;
}

.header-dark .nav a::after {
  background: #667eea;
}

.header-dark .logo {
  color: #ffffff;
}

.header-dark .mobile-menu-btn span {
  background: rgba(255, 255, 255, 0.9);
}

/* 滚动后添加背景 */
.header-scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
}

.header-dark.header-scrolled {
  background: rgba(15, 23, 42, 0.95);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  transition: transform 0.2s;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  font-size: 28px;
}

.nav {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #667eea;
  transition: width 0.3s;
}

.nav a:hover,
.nav a.router-link-active {
  color: #667eea;
}

.nav a.router-link-active::after,
.nav a:hover::after {
  width: 100%;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.lang-switch {
  padding: 8px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.lang-switch:hover {
  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2px;
  transition: all 0.3s;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(15, 23, 42, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
  }

  .nav.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav a {
    width: 100%;
    padding: 10px 0;
    text-align: center;
  }
}
</style>

