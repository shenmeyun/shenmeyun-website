<template>
  <div class="contact">
    <section class="contact-hero">
      <TechBackground />
      <div class="container">
        <h1 class="page-title">{{ t('contact.title') }}</h1>
        <p class="page-subtitle">{{ t('contact.subtitle') }}</p>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <div class="contact-wrapper">
          <div class="contact-form-section">
            <h2>{{ currentLang === 'zh' ? '发送消息' : 'Send Message' }}</h2>
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label>{{ t('contact.form.name') }}</label>
                <input v-model="form.name" type="text" required />
              </div>
              <div class="form-group">
                <label>{{ t('contact.form.email') }}</label>
                <input v-model="form.email" type="email" required />
              </div>
              <div class="form-group">
                <label>{{ t('contact.form.phone') }}</label>
                <input v-model="form.phone" type="tel" />
              </div>
              <div class="form-group">
                <label>{{ t('contact.form.message') }}</label>
                <textarea v-model="form.message" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                {{ t('contact.form.submit') }}
              </button>
            </form>
          </div>

          <div class="contact-info-section">
            <h2>{{ t('contact.info.address') }}</h2>
            <div class="info-item">
              <div class="info-icon">📍</div>
              <div class="info-content">
                <strong class="info-label">{{ t('contact.info.address') }}</strong>
                <p class="info-value">{{ t('contact.info.addressValue') }}</p>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon">📞</div>
              <div class="info-content">
                <strong class="info-label">{{ t('contact.info.phone') }}</strong>
                <a :href="`tel:${t('contact.info.phoneValue')}`" class="info-value info-link">
                  {{ t('contact.info.phoneValue') }}
                </a>
              </div>
            </div>
            <div class="info-item">
              <div class="info-icon">✉️</div>
              <div class="info-content">
                <strong class="info-label">{{ t('contact.info.email') }}</strong>
                <a :href="`mailto:${t('contact.info.emailValue')}`" class="info-value info-link">
                  {{ t('contact.info.emailValue') }}
                </a>
              </div>
            </div>
            <div class="info-card">
              <h3>{{ currentLang === 'zh' ? '工作时间' : 'Working Hours' }}</h3>
              <p>{{ currentLang === 'zh' ? '周一至周五：9:00 - 18:00' : 'Monday - Friday: 9:00 - 18:00' }}</p>
              <p>{{ currentLang === 'zh' ? '周末：10:00 - 17:00' : 'Weekend: 10:00 - 17:00' }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '@/composables/useI18n'
import TechBackground from '@/components/TechBackground.vue'

const { currentLang, t } = useI18n()

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const handleSubmit = () => {
  alert(currentLang === 'zh' ? '感谢您的留言！我们会尽快与您联系。' : 'Thank you for your message! We will contact you soon.')
  form.value = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }
}
</script>

<style scoped>
.contact {
  padding-top: 70px;
}

.contact-hero {
  position: relative;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  padding: 120px 0 80px;
  color: white;
  text-align: center;
  overflow: hidden;
}

.contact-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.3;
  pointer-events: none;
}

.page-title {
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
}

.page-subtitle {
  font-size: 22px;
  opacity: 0.9;
  position: relative;
  z-index: 1;
}

.contact-content {
  padding: 80px 0;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  position: relative;
}

.contact-content::before {
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.contact-form-section h2,
.contact-info-section h2 {
  font-size: 28px;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  padding-bottom: 15px;
}

.contact-form-section h2::after,
.contact-info-section h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.contact-form-section h2::before {
  content: '💬';
  font-size: 24px;
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.6));
}

.contact-info-section h2::before {
  content: '📍';
  font-size: 24px;
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.6));
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group {
  position: relative;
}

.form-group label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 10px;
  display: block;
  font-size: 15px;
  letter-spacing: 0.5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 16px;
  color: #ffffff;
  transition: all 0.3s;
  font-family: inherit;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1), 0 4px 20px rgba(102, 126, 234, 0.2);
}

.form-group input:hover,
.form-group textarea:hover {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.btn {
  padding: 14px 32px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 16px;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
}

.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 15px;
  transition: all 0.3s;
}

.info-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.3);
  transform: translateX(5px);
}

.info-icon {
  font-size: 28px;
  flex-shrink: 0;
  filter: drop-shadow(0 0 8px rgba(102, 126, 234, 0.5));
}

.info-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-label {
  display: block;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.info-value {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
}

.info-link {
  color: #667eea;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;
}

.info-link:hover {
  color: #764ba2;
  text-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
}

.info-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 12px;
  color: white;
  margin-top: 20px;
}

.info-card h3 {
  margin-bottom: 15px;
  font-size: 20px;
}

.info-card p {
  margin-bottom: 8px;
  opacity: 0.9;
}

@media (max-width: 968px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 36px;
  }
}
</style>

