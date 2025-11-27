<template>
  <div class="services">
    <section class="services-hero">
      <TechBackground />
      <div class="container">
        <h1 class="page-title">{{ t('services.title') }}</h1>
        <p class="page-subtitle">{{ t('services.subtitle') }}</p>
      </div>
    </section>

    <section class="services-content">
      <div class="container">
        <div class="services-grid">
          <div v-for="(service, index) in services" :key="index" class="service-card" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="service-header">
              <div class="service-icon-wrapper">
                <div class="service-icon">{{ service.icon }}</div>
                <div class="service-icon-bg"></div>
              </div>
              <h3>{{ service.title }}</h3>
            </div>
            <p class="service-description">{{ service.description }}</p>
            <div class="service-features">
              <div v-for="(feature, fIndex) in getServiceFeatures(index)" :key="fIndex" class="feature-item">
                <span class="feature-check">✓</span>
                <span>{{ feature }}</span>
              </div>
            </div>
            <div class="service-link">
              <router-link to="/contact">
                {{ currentLang === 'zh' ? '立即咨询' : 'Get Quote' }}
                <span>→</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why-choose">
      <div class="container">
        <h2 class="section-title">{{ currentLang === 'zh' ? '为什么选择我们的服务' : 'Why Choose Our Services' }}</h2>
        <div class="reasons-grid">
          <div class="reason-item">
            <div class="reason-number">01</div>
            <h3>{{ currentLang === 'zh' ? '专业团队' : 'Professional Team' }}</h3>
            <p>{{ currentLang === 'zh' ? '50+技术专家，平均5年以上行业经验' : '50+ technical experts with average 5+ years industry experience' }}</p>
          </div>
          <div class="reason-item">
            <div class="reason-number">02</div>
            <h3>{{ currentLang === 'zh' ? '成功案例' : 'Success Cases' }}</h3>
            <p>{{ currentLang === 'zh' ? '500+成功项目，覆盖各行业领域' : '500+ successful projects covering various industries' }}</p>
          </div>
          <div class="reason-item">
            <div class="reason-number">03</div>
            <h3>{{ currentLang === 'zh' ? '技术领先' : 'Technical Leadership' }}</h3>
            <p>{{ currentLang === 'zh' ? '采用最新技术栈，确保系统先进性' : 'Using latest technology stack to ensure system advancement' }}</p>
          </div>
          <div class="reason-item">
            <div class="reason-number">04</div>
            <h3>{{ currentLang === 'zh' ? '全程服务' : 'Full Service' }}</h3>
            <p>{{ currentLang === 'zh' ? '从需求到上线，提供一站式服务' : 'One-stop service from requirements to launch' }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <h2>{{ currentLang === 'zh' ? '准备开始您的项目？' : 'Ready to Start Your Project?' }}</h2>
        <p>{{ currentLang === 'zh' ? '联系我们，获取专业的解决方案和详细报价' : 'Contact us for professional solutions and detailed quotes' }}</p>
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
const services = computed(() => t('services.items'))

const serviceFeatures = {
  zh: [
    ['需求分析', 'UI/UX设计', '开发实施', '测试验收', '上线运营'],
    ['设备接入', '数据采集', '智能分析', '远程控制', '预测维护'],
    ['架构设计', '前后端开发', '数据库设计', '性能优化', '安全防护'],
    ['云架构设计', '云迁移', '云运维', '成本优化', '灾备方案'],
    ['数据采集', '数据存储', '数据分析', '数据可视化', '智能决策'],
    ['安全评估', '防护设计', '安全运维', '应急响应', '合规咨询'],
  ],
  en: [
    ['Requirement Analysis', 'UI/UX Design', 'Development', 'Testing', 'Launch'],
    ['Device Integration', 'Data Collection', 'Smart Analysis', 'Remote Control', 'Predictive Maintenance'],
    ['Architecture Design', 'Frontend/Backend', 'Database Design', 'Performance', 'Security'],
    ['Cloud Architecture', 'Cloud Migration', 'Cloud Ops', 'Cost Optimization', 'Disaster Recovery'],
    ['Data Collection', 'Data Storage', 'Data Analysis', 'Visualization', 'Smart Decision'],
    ['Security Assessment', 'Protection Design', 'Security Ops', 'Incident Response', 'Compliance'],
  ],
}

const getServiceFeatures = (index) => {
  return serviceFeatures[currentLang.value]?.[index] || []
}
</script>

<style scoped>
.services {
  padding-top: 70px;
}

.services-hero {
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

.services-content .container {
  position: relative;
  z-index: 1;
}

.why-choose .container {
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

.services-content {
  padding: 100px 0;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  position: relative;
}

.services-content::before {
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 40px;
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeInUp 0.6s ease both;
  position: relative;
  overflow: hidden;
}

.service-card::before {
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

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.08);
}

.service-header {
  margin-bottom: 25px;
}

.service-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.service-icon {
  font-size: 56px;
  position: relative;
  z-index: 1;
}

.service-icon-bg {
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

.service-card h3 {
  font-size: 26px;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 0;
}

.service-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 25px;
  font-size: 16px;
}

.service-features {
  margin-bottom: 25px;
  padding-top: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
}

.feature-check {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  flex-shrink: 0;
}

.service-link {
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.service-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: gap 0.3s;
  font-size: 16px;
}

.service-link a:hover {
  gap: 10px;
}

.why-choose {
  padding: 100px 0;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  position: relative;
}

.section-title {
  text-align: center;
  font-size: 42px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  padding-bottom: 20px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.reason-item {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.reason-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.3);
}

.reason-number {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 15px;
}

.reason-item h3 {
  font-size: 22px;
  color: #ffffff;
  margin-bottom: 12px;
  font-weight: 700;
}

.reason-item p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  font-size: 15px;
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

  .services-grid {
    grid-template-columns: 1fr;
  }

  .reasons-grid {
    grid-template-columns: 1fr;
  }

  .cta-section h2 {
    font-size: 32px;
  }
}
</style>
