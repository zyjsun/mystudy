import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/hi1'
import Hi2 from '@/components/hi2'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },{
      path: '/Hi',
      name: 'Hi',
      component: Hi,
      children: [
        {
          path: '/',
          component: Hi
        },
        {
          path: 'hi1',
          name: 'Hello/Hi/hi1',
          component: Hi1,
          alias: '/jspang'

        },
        {
          path: 'hi2',
          name: 'Hello/Hi/hi2',
          component: Hi2
        }
      ]
    }
    ,{
      path :'/goHome',
      redirect: '/'
    },{
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle',
      beforeEnter:(to,from ,next)=>{
        console.log(to);
        console.log(from);
        next(true);

      }
    },{
      path: '*',
      component: Error
    }
  ]
})
