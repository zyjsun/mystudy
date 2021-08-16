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
  }, {
    path: '/login',
    name: 'login',
    component: import('../views/Login.vue')
  }, {
    path: '/register',
    name: 'register',
    component: import('../views/Register.vue')
  }, {
    path: '/myinfo',
    name: 'myinfo',
    component: import('../components/myInfo.vue')
  }, {
    path: '/content/:id',
    name: 'content',
    component: import('../components/content.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
