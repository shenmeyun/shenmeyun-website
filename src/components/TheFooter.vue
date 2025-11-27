<template>
  <footer class="footer">
    <div class="footer-background"></div>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section footer-about">
          <h3 class="section-title">
            <span class="title-icon">🏢</span>
            {{ currentLang === 'zh' ? '关于我们' : 'About Us' }}
          </h3>
          <div class="about-content">
            <div class="footer-logo">
              <span class="logo-icon">☁️</span>
              <span class="logo-text">{{ t('nav.home') === '首页' ? '什么云科技' : 'ShenMeYun Tech' }}</span>
            </div>
            <p class="footer-description">
              {{ t('about.description') }}
            </p>
          </div>
        </div>
        <div class="footer-section footer-links">
          <h3 class="section-title">
            <span class="title-icon">🔗</span>
            {{ t('footer.links') }}
          </h3>
          <ul class="link-list">
            <li>
              <router-link to="/" class="footer-link">
                <span class="link-bullet">▸</span>
                <span>{{ t('nav.home') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="footer-link">
                <span class="link-bullet">▸</span>
                <span>{{ t('nav.about') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="footer-link">
                <span class="link-bullet">▸</span>
                <span>{{ t('nav.services') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/cases" class="footer-link">
                <span class="link-bullet">▸</span>
                <span>{{ t('nav.cases') }}</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="footer-link">
                <span class="link-bullet">▸</span>
                <span>{{ t('nav.contact') }}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="footer-section footer-contact">
          <h3 class="section-title">
            <span class="title-icon">📞</span>
            {{ t('footer.contact') }}
          </h3>
          <ul class="contact-list">
            <li class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-content">
                <span class="contact-label">{{ t('contact.info.address') }}</span>
                <span class="contact-value">{{ t('contact.info.addressValue') }}</span>
              </div>
            </li>
            <li class="contact-item">
              <div class="contact-icon">📞</div>
              <div class="contact-content">
                <span class="contact-label">{{ t('contact.info.phone') }}</span>
                <a :href="`tel:${t('contact.info.phoneValue')}`" class="contact-value contact-link">
                  {{ t('contact.info.phoneValue') }}
                </a>
              </div>
            </li>
            <li class="contact-item">
              <div class="contact-icon">✉️</div>
              <div class="contact-content">
                <span class="contact-label">{{ t('contact.info.email') }}</span>
                <a :href="`mailto:${t('contact.info.emailValue')}`" class="contact-value contact-link">
                  {{ t('contact.info.emailValue') }}
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <p class="copyright">
          <span class="copyright-icon">©</span>
          {{ t('footer.copyright') }}
        </p>
        <p class="beian">
          <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener noreferrer" class="beian-link">
            琼ICP备2024048013号-1
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'

const { currentLang, t } = useI18n()
</script>

<style scoped>
.footer {
  position: relative;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  color: white;
  padding: 80px 0 30px;
  margin-top: 80px;
  overflow: hidden;
}

.footer-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.3;
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  margin-bottom: 50px;
}

.footer-section {
  position: relative;
  flex: 1;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-icon {
  font-size: 28px;
  filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.5));
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  font-size: 15px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.title-icon {
  font-size: 20px;
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.6));
}

/* 快速链接样式 */
.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-list li {
  margin-bottom: 12px;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s;
  padding: 8px 0;
  position: relative;
  font-size: 15px;
}

.footer-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  transition: width 0.3s;
}

.footer-link:hover {
  color: #ffffff;
  padding-left: 10px;
}

.footer-link:hover::before {
  width: 4px;
}

.link-bullet {
  color: #667eea;
  font-size: 12px;
  transition: transform 0.3s;
  display: inline-block;
}

.footer-link:hover .link-bullet {
  transform: translateX(5px);
  color: #764ba2;
}

/* 联系方式样式 */
.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(102, 126, 234, 0.3);
  transform: translateX(5px);
}

.contact-icon {
  font-size: 24px;
  flex-shrink: 0;
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.5));
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
}

.contact-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.contact-value {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  word-break: break-word;
}

.contact-link {
  color: #667eea;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;
}

.contact-link:hover {
  color: #764ba2;
  text-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
}

/* 底部版权 */
.footer-bottom {
  margin-top: 50px;
}

.footer-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.1) 80%, transparent 100%);
  margin-bottom: 25px;
}

.copyright {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.copyright-icon {
  font-size: 16px;
  color: #667eea;
  filter: drop-shadow(0 0 5px rgba(102, 126, 234, 0.5));
}

.beian {
  text-align: center;
  margin-top: 10px;
}

.beian-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 12px;
  transition: color 0.3s ease;
}

.beian-link:hover {
  color: rgba(255, 255, 255, 0.9);
}

@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 50px;
  }
}

@media (max-width: 768px) {
  .footer-content {
    gap: 40px;
  }

  .contact-item {
    padding: 12px;
  }

  .copyright {
    flex-direction: column;
    gap: 5px;
  }
}
</style>
