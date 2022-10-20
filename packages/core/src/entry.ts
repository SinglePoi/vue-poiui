import { App } from 'vue'
import PButton from './components/button/PButton.vue'

export { PButton }

export default {
  install(app: App) {
    app.component("PButton", PButton)
  }
}