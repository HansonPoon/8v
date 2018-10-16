import Vue from 'vue'
import Router from 'vue-router'
import { log } from './log'
import f3 from './f3'
import f4 from './f4'
import setting from './setting'

Vue.use(Router)

export default new Router({
  routes: [
    ...log,
    ...f3,
    ...f4,
    ...setting,
    {
      path: '/index',
      name: 'index',
      component: () => import('@/view/index/index.vue')
    },
  ]
})
