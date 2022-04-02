import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import http from './libs/request'
import './mock'

import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import "./index.css"


const app = createApp(App)
app.config.globalProperties.$http = http
app.use(ElementPlus)
   .use(router)
   .use(createPinia())
   .mount('#app')
