import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import './sass/app.scss'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
