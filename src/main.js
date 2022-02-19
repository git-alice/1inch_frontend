import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'ant-design-vue/dist/antd.css';


Vue.config.productionTip = false

Vue.use(Antd); // Design system
Vue.use(BootstrapVue); Vue.use(IconsPlugin) // Grid system

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
