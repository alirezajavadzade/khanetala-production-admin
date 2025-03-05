import { createApp } from 'vue'
import App from '@/App.vue'
import { registerPlugins } from '@core/utils/plugins'

// Styles
import '@core/scss/template/index.scss'
import '@layouts/styles/index.scss'
import "@/assets/styles/main.css"
import "@/assets/styles/index.css"

// Create vue app
const app = createApp(App)


// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
