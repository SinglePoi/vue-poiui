import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import POI from './entry'
// import POI from '../dist/poi-ui.js'
// import '../dist/style.css'

createApp(App).use(POI).mount('#app')
