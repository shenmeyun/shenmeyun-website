<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <TechBackground />
      <div class="hero-content-wrapper">
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge">
              <span>✨ {{ currentLang === 'zh' ? '领先的数字化解决方案' : 'Leading Digital Solutions' }}</span>
            </div>
            <h1 class="hero-title">
              <span class="gradient-text">{{ t('hero.title') }}</span>
            </h1>
            <p class="hero-subtitle">{{ t('hero.subtitle') }}</p>
            <p class="hero-description">{{ t('hero.description') }}</p>
            <div class="hero-actions">
              <router-link to="/about" class="btn btn-primary">
                {{ t('hero.cta') }}
                <span class="btn-arrow">→</span>
              </router-link>
              <router-link to="/cases" class="btn btn-secondary">
                {{ t('hero.cta2') }}
              </router-link>
            </div>
            <div class="hero-stats">
              <div class="hero-stat">
                <div class="stat-value">500+</div>
                <div class="stat-label">{{ currentLang === 'zh' ? '项目' : 'Projects' }}</div>
              </div>
              <div class="hero-stat">
                <div class="stat-value">200+</div>
                <div class="stat-label">{{ currentLang === 'zh' ? '客户' : 'Clients' }}</div>
              </div>
              <div class="hero-stat">
                <div class="stat-value">98%</div>
                <div class="stat-label">{{ currentLang === 'zh' ? '满意度' : 'Satisfaction' }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <span>{{ currentLang === 'zh' ? '向下滚动' : 'Scroll Down' }}</span>
      </div>
    </section>

    <!-- Services Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('services.title') }}</h2>
          <p class="section-subtitle">{{ t('services.subtitle') }}</p>
        </div>
        <div class="features-grid">
          <div v-for="(service, index) in services" :key="index" class="feature-card" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="feature-icon-wrapper">
              <div class="feature-icon">{{ service.icon }}</div>
              <div class="feature-icon-bg"></div>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <div class="feature-link">
              <router-link to="/services">
                {{ currentLang === 'zh' ? '了解更多' : 'Learn More' }}
                <span>→</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="advantages">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('advantages.title') }}</h2>
          <p class="section-subtitle">{{ t('advantages.subtitle') }}</p>
        </div>
        <div class="advantages-grid">
          <div v-for="(advantage, index) in advantages" :key="index" class="advantage-card">
            <div class="advantage-icon">{{ advantage.icon }}</div>
            <h3>{{ advantage.title }}</h3>
            <p>{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('process.title') }}</h2>
          <p class="section-subtitle">{{ t('process.subtitle') }}</p>
        </div>
        <div class="process-timeline">
          <div v-for="(step, index) in processSteps" :key="index" class="process-step">
            <div class="step-number">{{ step.number }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
            <div v-if="index < processSteps.length - 1" class="step-connector"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="tech-stack">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('tech.title') }}</h2>
          <p class="section-subtitle">{{ t('tech.subtitle') }}</p>
        </div>
        <div class="tech-grid">
          <div v-for="(category, index) in techCategories" :key="index" class="tech-category">
            <h3>{{ category.name }}</h3>
            <div class="tech-tags">
              <span v-for="(item, itemIndex) in category.items" :key="itemIndex" class="tech-tag">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number" data-target="500">0</div>
            <div class="stat-label">{{ currentLang === 'zh' ? '成功项目' : 'Success Projects' }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="200">0</div>
            <div class="stat-label">{{ currentLang === 'zh' ? '合作客户' : 'Clients' }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="50">0</div>
            <div class="stat-label">{{ currentLang === 'zh' ? '技术专家' : 'Experts' }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="98">0</div>
            <div class="stat-label">{{ currentLang === 'zh' ? '客户满意度' : 'Satisfaction' }}%</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>{{ currentLang === 'zh' ? '准备开始您的数字化之旅？' : 'Ready to Start Your Digital Journey?' }}</h2>
        <p>{{ currentLang === 'zh' ? '联系我们，获取专业的解决方案和咨询服务' : 'Contact us for professional solutions and consulting services' }}</p>
        <router-link to="/contact" class="btn btn-primary btn-large">
          {{ currentLang === 'zh' ? '立即咨询' : 'Get Started' }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from '@/composables/useI18n'
import TechBackground from '@/components/TechBackground.vue'

const { currentLang, t } = useI18n()

const services = computed(() => t('services.items'))
const advantages = computed(() => t('advantages.items'))
const processSteps = computed(() => t('process.steps'))
const techCategories = computed(() => t('tech.categories'))

onMounted(() => {
  // 数字动画 - 优化版本，确保只执行一次
  let hasAnimated = false
  const animateNumbers = () => {
    if (hasAnimated) return
    hasAnimated = true
    
    const numbers = document.querySelectorAll('.stat-number')
    numbers.forEach((num) => {
      // 检查是否已经动画过
      if (num.dataset.animated === 'true') return
      num.dataset.animated = 'true'
      
      const target = parseInt(num.getAttribute('data-target'))
      const duration = 2000
      const startTime = performance.now()
      
      const updateNumber = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const current = Math.floor(target * progress)
        
        num.textContent = current + (target === 98 ? '%' : '+')
        
        if (progress < 1) {
          requestAnimationFrame(updateNumber)
        } else {
          num.textContent = target + (target === 98 ? '%' : '+')
        }
      }
      requestAnimationFrame(updateNumber)
    })
  }

  // 使用 Intersection Observer 触发动画，添加性能优化选项
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers()
          observer.disconnect()
        }
      })
    },
    {
      rootMargin: '50px', // 提前50px开始动画
      threshold: 0.1
    }
  )

  const statsSection = document.querySelector('.stats')
  if (statsSection) {
    observer.observe(statsSection)
  }
})
</script>

<style scoped>
.home {
  padding-top: 70px;
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
}

.hero-content-wrapper {
  position: relative;
  z-index: 1;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero-content {
  text-align: center;
  color: white;
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 0;
}

.hero-badge {
  display: inline-block;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  margin-bottom: 30px;
  font-size: 14px;
  animation: fadeInUp 0.8s ease;
}

.hero-title {
  font-size: 72px;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.1;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 32px;
  margin-bottom: 20px;
  opacity: 0.9;
  font-weight: 300;
  animation: fadeInUp 0.8s ease 0.4s both;
}

.hero-description {
  font-size: 20px;
  margin-bottom: 50px;
  opacity: 0.8;
  line-height: 1.6;
  animation: fadeInUp 0.8s ease 0.6s both;
}

.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 60px;
  animation: fadeInUp 0.8s ease 0.8s both;
}

.btn {
  padding: 16px 36px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
  transform: translate3d(0, -3px, 0);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-large {
  padding: 20px 48px;
  font-size: 18px;
}

.btn-arrow {
  transition: transform 0.3s ease;
  will-change: transform;
  transform: translateZ(0);
}

.btn-primary:hover .btn-arrow {
  transform: translate3d(5px, 0, 0);
}

.hero-stats {
  display: flex;
  gap: 60px;
  justify-content: center;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeInUp 0.8s ease 1s both;
}

.hero-stat {
  text-align: center;
}

.stat-value {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 14px;
  opacity: 0.7;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  will-change: transform;
  animation: bounce 2s infinite;
}

.mouse {
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 8px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translate3d(-50%, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(-50%, 12px, 0);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translate3d(-50%, 0, 0);
  }
  50% {
    transform: translate3d(-50%, -10px, 0);
  }
}

/* Features Section */
.features {
  padding: 120px 0;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  position: relative;
}

.features::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.3;
  pointer-events: none;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: 48px;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 20px;
  color: #64748b;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease, background 0.4s ease;
  position: relative;
  overflow: hidden;
  will-change: transform;
  transform: translateZ(0);
  animation: fadeInUp 0.6s ease both;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transform: scaleX(0);
  transition: transform 0.4s;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translate3d(0, -10px, 0);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.1);
}

.feature-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 25px;
}

.feature-icon {
  font-size: 56px;
  position: relative;
  z-index: 1;
}

.feature-icon-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 20px;
  z-index: 0;
}

.feature-card h3 {
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 700;
}

.feature-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin-bottom: 20px;
}

.feature-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.3s;
}

.feature-link a:hover {
  gap: 10px;
  color: #764ba2;
}

/* Advantages Section */
.advantages {
  padding: 120px 0;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  position: relative;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.advantage-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 40px 30px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  will-change: transform;
  transform: translateZ(0);
}

.advantage-card:hover {
  transform: translate3d(0, -5px, 0);
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.advantage-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.advantage-card h3 {
  font-size: 20px;
  color: #ffffff;
  margin-bottom: 12px;
  font-weight: 700;
}

.advantage-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-size: 15px;
}

/* Process Section */
.process {
  padding: 120px 0;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
}

.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 800px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  position: relative;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  flex-shrink: 0;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.step-content {
  flex: 1;
  padding-top: 10px;
}

.step-content h3 {
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 700;
}

.step-content p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
}

.step-connector {
  position: absolute;
  left: 30px;
  top: 60px;
  width: 2px;
  height: calc(100% + 40px);
  background: linear-gradient(180deg, #667eea 0%, transparent 100%);
}

/* Tech Stack Section */
.tech-stack {
  padding: 120px 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
}

.tech-stack .section-title {
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tech-stack .section-subtitle {
  color: rgba(255, 255, 255, 0.7);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.tech-category {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-category h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #667eea;
  font-weight: 700;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-tag {
  padding: 8px 16px;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s;
}

.tech-tag:hover {
  background: rgba(102, 126, 234, 0.3);
  transform: translateY(-2px);
}

/* Stats Section */
.stats {
  padding: 120px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 60px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 64px;
  font-weight: 800;
  margin-bottom: 15px;
  line-height: 1;
}

.stat-label {
  font-size: 18px;
  opacity: 0.9;
}

/* CTA Section */
.cta-section {
  padding: 120px 0;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  text-align: center;
  position: relative;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.3;
  pointer-events: none;
}

.cta-section h2 {
  font-size: 42px;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 800;
}

.cta-section p {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 42px;
  }

  .hero-subtitle {
    font-size: 24px;
  }

  .hero-description {
    font-size: 16px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-stats {
    flex-direction: column;
    gap: 30px;
  }

  .section-title {
    font-size: 36px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .process-step {
    flex-direction: column;
  }

  .step-connector {
    display: none;
  }
}
</style>
