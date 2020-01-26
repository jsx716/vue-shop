import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/Home'
import Android from '@/views/android/Android'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/android',
    component: Android
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
