import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/index'


// import { Tabbar, TabbarItem } from 'vant';

// Vue.use(Tabbar);
// Vue.use(TabbarItem);
import '@/plugins/vant'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
