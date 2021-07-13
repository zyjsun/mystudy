import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelazyload from 'vue-lazyload'
import FastClick from 'fastclick'
import './assets/css/reset.css'
import { Toast } from './common/js/plugin'
import './common/css/plugin.less'
Vue.config.productionTip = false
//懒加载的默认占位图
//300ms延迟 h5支持双击放大
import def_lazy_img from './assets/image/load.gif'
//懒加载
Vue.use(Vuelazyload, {
  loading: def_lazy_img
})
Vue.use(Toast)
FastClick.attach(document.body)//无300毫秒的延迟
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
