// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import header from '@/components/header.vue'  //头部组件
import nodata from '@/components/nodata.vue'  //头部组件
import iView from 'iview'
import publicjs from '@/myconfig/public.js'
import axios from 'axios'

import 'iview/dist/styles/iview.css'
Vue.use(iView);

Vue.use(publicjs);

Vue.config.productionTip = false
Vue.config.devtools = true  //启用vue调试工具

Vue.prototype.$axios = axios

// axios.defaults.baseURL = 'http://127.0.0.1:8001'
// axios.defaults.baseURL = 'http://192.168.0.162:8001'
// axios.defaults.baseURL = 'http://longwin.io:8001'
axios.defaults.baseURL = 'http://192.168.0.111:8001'


Vue.component('v-header', header)    //顶部
Vue.component('v-nodata', nodata)    //没有数据

import VueTouch from 'vue-touch'    //使用滑动插件

Vue.use(VueTouch, { name: 'v-touch' })
VueTouch.config.swipe = {
  threshold: 20 //手指左右滑动距离
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
