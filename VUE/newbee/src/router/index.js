import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home,
    meta: {
      index: 1
    }
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }, {
    path: '/product/:id',
    name: 'product',
    meta: {
      index: 3
    },
    component: () => import('@/views/ProductDetail.vue')
  }, {
    path: '/cart',

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
