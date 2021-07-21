import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Icon, Swipe, SwipeItem, Form, Field, CellGroup, ActionBar, ActionBarIcon, ActionBarButton } from 'vant';
import 'lib-flexible/flexible'
//全局过滤器
const app = createApp(App)
app.use(Button).use(Icon).use(Swipe).use(SwipeItem).use(Form).use(Field).use(ActionBar).use(ActionBarIcon).use(ActionBarButton)
  .use(CellGroup).use(store).use(router).mount('#app')
app.config.globalProperties.$filters = {
  prefix (url) {
    if (url && url.startsWith('http')) {
      return url
    } else {
      url = `http://47.99.134.126:28019${url}`
      return url
    }
  }
}
