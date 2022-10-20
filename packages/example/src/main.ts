import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { PButton } from '@poi/core'
import '@poi/core/dist/style.css'
createApp(App).component("PButton", PButton).mount('#app')
