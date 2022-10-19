import {App} from 'vue'
import PButton from './components/button/index.vue'

export {PButton}

export default {
    install(app:App) {
        app.component("PButton", PButton)
    }
}