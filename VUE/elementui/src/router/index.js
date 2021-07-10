import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import ('@/view/Login.vue')
  },{
    path: '/Home',
    name:'home',
    component: ()=> import('@/view/Home.vue'),
    children:[
      {
      path:'userinfo',
      component: ()=>import('@/view/userinfo.vue')
      },{
        path: 'userinfo2',
        component: ()=>import('@/view/Form.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
