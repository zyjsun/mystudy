import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: import('../views/Home.vue')
  }, {
    path: '/add',
    name: 'add',
    component: import('../views/Add.vue')
  }, {
    path: '/user',
    name: 'user',
    component: import('../views/my.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
