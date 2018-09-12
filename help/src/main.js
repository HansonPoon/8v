// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import header from '@/components/header.vue'  //头部组件
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import publicjs from '@/myconfig/public.js'
import axios from 'axios'

Vue.use(iView);
Vue.use(publicjs);

Vue.config.productionTip = false

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://192.168.0.162:8001'


Vue.component('v-header', header)    //没有更多数据了~


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})