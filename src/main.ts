import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from '@/router'
import App from './App.vue'

// 引入初始化样式
import '@/styles/common.scss'

createApp(App).use(createPinia()).use(router).mount('#app')
