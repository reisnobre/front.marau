import Vue from 'vue'
import axios from 'axios'
import VueTheMask from 'vue-the-mask'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import { api } from './config'

// Vue.prototype.$api = api
Vue.prototype.$http = axios
Vue.use(VueTheMask)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
