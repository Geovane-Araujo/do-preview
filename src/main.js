import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import PrimeVue from 'primevue/config'
import VueParticles from 'vue-particles'
// Compoentens
import mnu from './components/MenuBar/MenuBar.vue'
import PersonalizeTable from './components/ExplorerGrig/ExplorerGrid.vue'

import 'primevue/resources/themes/arya-orange/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
// start components
app.component('menu-bar', mnu)
app.component('explorer', PersonalizeTable)
// end components
app.use(VueParticles)
app.use(router).mount('#app')
