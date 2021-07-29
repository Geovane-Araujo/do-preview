import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import PrimeVue from 'primevue/config'
import mnu from './components/MenuBar/MenuBar.vue'
import './global'
import VueParticles from 'vue-particles'

import 'primevue/resources/themes/arya-orange/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
app.component('menu-bar', mnu)
app.use(VueParticles)
app.use(router).mount('#app')
