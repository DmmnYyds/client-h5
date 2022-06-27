import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './common.css'
import './assets/lib/amfe-flexible.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
