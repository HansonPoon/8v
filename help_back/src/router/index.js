import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/view/log/login.vue')
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: () => import('@/view/log/forgetpassword.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/view/main/main.vue')
    },
  ]
})
