import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/modern-css-reset/dist/reset.min.css'
import './styles/global.scss'
import './assets/iconfont/iconfont.css'
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
