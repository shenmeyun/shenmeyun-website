import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useI18n } from './composables/useI18n'

// 在应用启动时初始化语言设置（根据浏览器语言自动检测）
const { initLang } = useI18n()
initLang()

const app = createApp(App)

app.use(router)

app.mount('#app')
