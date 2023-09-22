import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import './index.css'

const app = createApp(App)

app.use(router)
app.use(VueToast)

app.mount('#app')
