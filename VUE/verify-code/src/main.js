import Vue from 'vue'
import App from './App.vue'
import SanseVerifyCode from 'zyj-verify-code'
Vue.config.productionTip = false
Vue.use(SanseVerifyCode)
new Vue({
  render: h => h(App),
}).$mount('#app')

// import SanseVerifyCode from './components/sanse-verify-code.vue'
// SanseVerifyCode.install = Vue => Vue.component(SanseVerifyCode.name, SanseVerifyCode)
// export default SanseVerifyCode

