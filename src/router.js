import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const Gallery = () => import('./views/Gallery.vue')
const Rides = () => import('./views/Rides.vue')
const Plan = () => import('./views/Plan.vue')
const Contact = () => import('./views/Contact.vue')

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
      path: 'gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: 'plan',
      name: 'plan',
      component: Plan
    },
    {
      path: 'contact',
      name: 'contact',
      component: Contact
    }
  ]
})
