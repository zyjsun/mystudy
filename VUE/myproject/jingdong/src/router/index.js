import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  }, {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import('@/views/shop/Shop.vue')

  }, {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
    beforeEnter (to, from, next) {
      // const isLogin=localStorage.isLogin;
      // if(isLogin){
      //   next({name: 'Home'});
      // }else{
      //   next()
      // }
      //进入该页面之前
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home' }) : next();
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register/Regester.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // const isLogin = localStorage.isLogin;
  // if (isLogin || to.name === "Login") {
  //   next();
  // } else {
  //   next({ name: "Login" })
  // }
  // next()

  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name == "Login" || name == "Register");
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})


export default router
