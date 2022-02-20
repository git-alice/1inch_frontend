import Vue from 'vue'
import VueRouter from 'vue-router'

import AboutView from '../views/AboutView.vue'
import StartView from '../views/StartView.vue'
import MakerView from '../views/MakerView.vue'
import TakerView from '../views/TakerView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/start',
    name: 'start',
    component: StartView,
  },
  {
    path: '/maker',
    name: 'maker',
    component: MakerView,
  },
  {
    path: '/taker',
    name: 'taker',
    component: TakerView,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
