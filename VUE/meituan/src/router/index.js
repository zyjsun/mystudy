import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '@/views/goods/goods'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'goods',
    component: Goods
  },{
    path: '/commet',
    name: 'comment',
    component: ()=>import ('@/views/comments/comment.vue')
    // 按需引入
  },{
    path: '/seller',
    name: 'seller',
    component: ()=>import ('@/views/seller/seller.vue')
  }

  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
