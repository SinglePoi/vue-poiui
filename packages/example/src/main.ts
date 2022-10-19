import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { PButton } from '@poi/core'

createApp(App).component("PButton", PButton).mount('#app')
