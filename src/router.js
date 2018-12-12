import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Rides from './views/Rides.vue'
import Plan from './views/Plan.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: 'rides',
      name: 'rides',
      component: Rides
    },
    {
      path: 'plan',
      name: 'plan',
      component: Plan
    }
  ]
})
