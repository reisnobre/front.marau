import Vue from 'vue'
import axios from 'axios'
import VueTheMask from 'vue-the-mask'
import VueToasted from 'vue-toasted'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { cms, mail } from './config'

Vue.prototype.$http = axios
Vue.prototype.$cms = cms
Vue.use(VueTheMask)
Vue.use(VueToasted)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
