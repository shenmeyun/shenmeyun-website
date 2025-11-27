<template>
  <div class="cases">
    <section class="cases-hero">
      <TechBackground />
      <div class="container">
        <h1 class="page-title">{{ t('cases.title') }}</h1>
        <p class="page-subtitle">{{ t('cases.subtitle') }}</p>
      </div>
    </section>

    <section class="cases-content">
      <div class="container">
        <div class="cases-grid">
          <div v-for="(caseItem, index) in cases" :key="index" class="case-card" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="case-image">
              <div class="case-placeholder">
                {{ getCaseIcon(index) }}
              </div>
              <div class="case-overlay">
                <div class="case-result">{{ caseItem.result }}</div>
              </div>
            </div>
            <div class="case-content">
              <h3>{{ caseItem.title }}</h3>
              <p>{{ caseItem.description }}</p>
              <div class="case-tags">
                <span v-for="(tag, tagIndex) in caseItem.tags" :key="tagIndex" class="tag">
                  {{ tag }}
                </span>
              </div>
              <div class="case-link">
                <router-link to="/contact">
                  {{ currentLang === 'zh' ? '了解详情 →' : 'Learn More →' }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>{{ currentLang === 'zh' ? '想要类似的解决方案？' : 'Want Similar Solutions?' }}</h2>
        <p>{{ currentLang === 'zh' ? '联系我们，为您量身定制专业的数字化解决方案' : 'Contact us for customized professional digital solutions' }}</p>
        <router-link to="/contact" class="btn btn-primary">
          {{ currentLang === 'zh' ? '立即咨询' : 'Get Started' }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import TechBackground from '@/components/TechBackground.vue'

const { currentLang, t } = useI18n()
const cases = computed(() => t('cases.items'))

const getCaseIcon = (index) => {
  const icons = ['📱', '🌐', '💻', '🏥', '💰', '🎓']
  return icons[index] || '💼'
}
</script>

<style scoped>
.cases {
  padding-top: 70px;
}

.cases-hero {
  position: relative;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  padding: 120px 0 80px;
  color: white;
  text-align: center;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.cases-content .container {
  position: relative;
  z-index: 1;
}

.page-title {
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: 22px;
  opacity: 0.9;
}

.cases-content {
  padding: 100px 0;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  position: relative;
}

.cases-content::before {
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

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 40px;
}

.case-card {
  background: rgba(255, 255, 255, 0.05);
  /* 移除 backdrop-filter 以提升滚动性能 */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeInUp 0.6s ease both;
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.3);
}

.case-image {
  width: 100%;
  height: 240px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.case-placeholder {
  font-size: 80px;
  opacity: 0.8;
  z-index: 1;
}

.case-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.case-card:hover .case-overlay {
  opacity: 1;
}

.case-result {
  background: rgba(255, 255, 255, 0.95);
  color: #667eea;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 16px;
  transform: translateY(20px);
  transition: transform 0.3s;
}

.case-card:hover .case-result {
  transform: translateY(0);
}

.case-content {
  padding: 35px;
}

.case-content h3 {
  font-size: 26px;
  color: #ffffff;
  margin-bottom: 15px;
  font-weight: 700;
}

.case-content p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 15px;
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.tag {
  padding: 6px 14px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  color: #667eea;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.case-link {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.case-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.3s;
}

.case-link a:hover {
  gap: 10px;
}

.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 100px 0;
  text-align: center;
  color: white;
}

.cta-section h2 {
  font-size: 42px;
  margin-bottom: 20px;
  font-weight: 800;
}

.cta-section p {
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.9;
}

.btn {
  padding: 16px 36px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-block;
  font-size: 16px;
}

.btn-primary {
  background: white;
  color: #667eea;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
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
  .page-title {
    font-size: 40px;
  }

  .cases-grid {
    grid-template-columns: 1fr;
  }

  .cta-section h2 {
    font-size: 32px;
  }
}
</style>
