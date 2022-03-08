
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from '@/router';

import ElementUI from 'element-ui';
// import { Button, Select } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

//注册全局组件
// Vue.component('el-button', Button);
// Vue.component('el-select', Select);
Vue.use(VueRouter)



new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app');