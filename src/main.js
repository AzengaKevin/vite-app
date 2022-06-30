import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'bootstrap'
import './sass/app.scss'
import router from './router'

const app = createApp(App)

app.use(router)

// Cofigure Pinia
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
