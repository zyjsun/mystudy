import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      component: ()=>import('@/views/home/home.vue')
    },{
      path: '/item',
      // name: 'item',
      component: ()=>import('@/views/item/item.vue')
    },{
      path: '/score',
      component: ()=>import('@/views/score.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
