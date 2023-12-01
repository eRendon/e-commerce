import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { createPinia } from 'pinia'
import 'primevue/resources/themes/lara-light-green/theme.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import router from './route/routes'
import ToastService from 'primevue/toastservice'

const app = createApp(App)
app.use(PrimeVue)
app.use(createPinia())
app.use(router)
app.use(ToastService)
app.mount('#app')

