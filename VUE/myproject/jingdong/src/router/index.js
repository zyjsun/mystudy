import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('../views/home/Home.vue')
}, {
  path: '/cartList',
  name: 'CartList',
  component: () => import('../views/cartList/CartList.vue')
}, {
  path: '/orderConfirmation/:id',
  name: 'OrderConfirmation',
  component: () => import('../views/orderConfirmation/OrderConfirmation.vue')
}, {
  path: '/orderList',
  name: 'OrderList',
  component: () => import('../views/orderList/OrderList.vue')
}, {
  path: '/shop/:id',
  name: 'Shop',
  component: () => import('../views/shop/Shop.vue')
}, {
  path: '/register',
  name: 'Register',
  component: () => import('../views/register/Regester.vue'),
  beforeEnter (to, from, next) {
    const { isLogin } = localStorage;
    isLogin ? next({ name: 'Home' }) : next();
  }
}, {
  path: '/login',
  name: 'Login',
  component: () => import('../views/login/Login.vue'),
  beforeEnter (to, from, next) {
    const { isLogin } = localStorage;
    isLogin ? next({ name: 'Home' }) : next();
  }
},
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === "Login" || name === "Register");
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' });
})

export default router
