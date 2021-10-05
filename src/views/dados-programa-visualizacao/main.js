import { createApp, Vue } from 'vue'
import App from './App.vue'
import { BootstrapVue, ModalPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(ModalPlugin)
createApp(App).mount('#app')
