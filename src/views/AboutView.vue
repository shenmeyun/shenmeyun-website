<template>
  <div class="about">
    <section class="about-hero">
      <TechBackground />
      <div class="container">
        <h1 class="page-title">{{ t('about.title') }}</h1>
        <p class="page-subtitle">{{ t('about.subtitle') }}</p>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <div class="content-section">
          <p class="description">{{ t('about.description') }}</p>
          <p class="description">{{ t('about.description2') }}</p>
        </div>

        <div class="mission-vision">
          <div class="card">
            <div class="card-icon-wrapper">
              <div class="card-icon">🎯</div>
              <div class="card-icon-bg"></div>
            </div>
            <h3>{{ t('about.mission.title') }}</h3>
            <p>{{ t('about.mission.content') }}</p>
          </div>
          <div class="card">
            <div class="card-icon-wrapper">
              <div class="card-icon">👁️</div>
              <div class="card-icon-bg"></div>
            </div>
            <h3>{{ t('about.vision.title') }}</h3>
            <p>{{ t('about.vision.content') }}</p>
          </div>
        </div>

        <div class="values">
          <h2 class="section-title">{{ currentLang === 'zh' ? '核心价值' : 'Core Values' }}</h2>
          <div class="values-grid">
            <div v-for="(value, index) in values" :key="index" class="value-item" :style="{ animationDelay: `${index * 0.1}s` }">
              <div class="value-icon-wrapper">
                <div class="value-icon">{{ value.icon }}</div>
                <div class="value-icon-bg"></div>
              </div>
              <h4>{{ value.title }}</h4>
              <p>{{ value.desc }}</p>
            </div>
          </div>
        </div>

        <div class="history">
          <h2 class="section-title">{{ t('about.history.title') }}</h2>
          <div class="timeline">
            <div v-for="(item, index) in historyItems" :key="index" class="timeline-item" :style="{ animationDelay: `${index * 0.1}s` }">
              <div class="timeline-year">{{ item.year }}</div>
              <div class="timeline-content">
                <div class="timeline-dot"></div>
                <p>{{ item.event }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="team">
          <h2 class="section-title">{{ t('about.team.title') }}</h2>
          <p class="section-subtitle">{{ t('about.team.subtitle') }}</p>
          <div class="team-grid">
            <div v-for="(member, index) in teamMembers" :key="index" class="team-card" :style="{ animationDelay: `${index * 0.1}s` }">
              <div class="team-avatar">
                <div class="avatar-placeholder">{{ member.name.charAt(0) }}</div>
                <div class="avatar-ring"></div>
              </div>
              <h3>{{ member.name }}</h3>
              <div class="team-role">{{ member.role }}</div>
              <p>{{ member.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '@/composables/useI18n'
import TechBackground from '@/components/TechBackground.vue'

const { currentLang, t } = useI18n()

const historyItems = computed(() => t('about.history.items'))
const teamMembers = computed(() => t('about.team.members'))

const values = computed(() => [
  {
    icon: '💡',
    title: currentLang.value === 'zh' ? '创新' : 'Innovation',
    desc: currentLang.value === 'zh' ? '持续创新，引领技术前沿，用最新技术解决实际问题' : 'Continuous innovation, leading the technology frontier, solving real problems with latest technology',
  },
  {
    icon: '🤝',
    title: currentLang.value === 'zh' ? '专业' : 'Professional',
    desc: currentLang.value === 'zh' ? '专业团队，丰富经验，提供优质服务和解决方案' : 'Professional team with rich experience, providing quality services and solutions',
  },
  {
    icon: '⚡',
    title: currentLang.value === 'zh' ? '高效' : 'Efficiency',
    desc: currentLang.value === 'zh' ? '高效执行，快速交付，敏捷开发，持续优化' : 'Efficient execution, rapid delivery, agile development, continuous optimization',
  },
  {
    icon: '❤️',
    title: currentLang.value === 'zh' ? '诚信' : 'Integrity',
    desc: currentLang.value === 'zh' ? '诚信经营，客户至上，建立长期合作关系' : 'Integrity in business, customer first, building long-term partnerships',
  },
])
</script>

<style scoped>
.about {
  padding-top: 70px;
}

.about-hero {
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

.about-content {
  padding: 100px 0;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  position: relative;
}

.about-content::before {
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

.content-section {
  margin-bottom: 80px;
  position: relative;
  z-index: 1;
}

.description {
  font-size: 18px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 900px;
  margin: 0 auto 20px;
}

.mission-vision {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-bottom: 100px;
  position: relative;
  z-index: 1;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 50px 40px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: all 0.4s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.card::before {
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

.card:hover::before {
  transform: scaleX(1);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.3);
}

.card-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 25px;
}

.card-icon {
  font-size: 64px;
  position: relative;
  z-index: 1;
}

.card-icon-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border-radius: 50%;
  z-index: 0;
  filter: blur(20px);
}

.card h3 {
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 700;
}

.card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  font-size: 16px;
}

.values {
  margin-bottom: 100px;
  position: relative;
  z-index: 1;
}

.section-title {
  text-align: center;
  font-size: 42px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 20px;
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

.section-subtitle {
  text-align: center;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 50px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-item {
  text-align: center;
  padding: 40px 30px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeInUp 0.6s ease both;
}

.value-item:hover {
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.2);
  transform: translateY(-5px);
  border-color: rgba(102, 126, 234, 0.3);
}

.value-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
}

.value-icon {
  font-size: 48px;
  position: relative;
  z-index: 1;
}

.value-icon-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  border-radius: 50%;
  z-index: 0;
  filter: blur(15px);
}

.value-item h4 {
  font-size: 22px;
  color: #ffffff;
  margin-bottom: 12px;
  font-weight: 700;
}

.value-item p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  font-size: 15px;
}

.history {
  margin-bottom: 100px;
  position: relative;
  z-index: 1;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
  animation: fadeInUp 0.6s ease both;
}

.timeline-year {
  font-size: 28px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.timeline-content {
  position: relative;
  padding-left: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}

.timeline-content:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.3);
  transform: translateX(5px);
}

.timeline-dot {
  position: absolute;
  left: -35px;
  top: 25px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 4px solid #0f172a;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.3), 0 0 20px rgba(102, 126, 234, 0.5);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.3), 0 0 20px rgba(102, 126, 234, 0.5);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(102, 126, 234, 0.2), 0 0 30px rgba(102, 126, 234, 0.6);
  }
}

.timeline-content p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  font-size: 16px;
  margin: 0;
}

.team {
  margin-top: 100px;
  position: relative;
  z-index: 1;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.team-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.4s;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeInUp 0.6s ease both;
  position: relative;
  overflow: hidden;
}

.team-card::before {
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

.team-card:hover::before {
  transform: scaleX(1);
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.3);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.3);
}

.team-avatar {
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
}

.avatar-placeholder {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  font-weight: bold;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.avatar-ring {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 50%;
  border: 2px solid transparent;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: padding-box;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
  will-change: transform;
  transform: translateZ(0);
}

.team-card:hover .avatar-ring {
  opacity: 0.5;
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  to {
    transform: rotate3d(0, 0, 1, 360deg);
  }
}

.team-card h3 {
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 700;
}

.team-role {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.team-card p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  font-size: 15px;
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

  .mission-vision {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .timeline {
    padding-left: 30px;
  }
}
</style>
