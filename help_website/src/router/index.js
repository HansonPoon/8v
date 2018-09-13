import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/view/main.vue'),
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('@/view/index/index.vue'),
        },
        {
          path: '/introduce',
          name: 'introduce',
          component: () => import('@/view/introduce/introduce.vue'),
        },
        {
          path: '/background',
          name: 'background',
          component: () => import('@/view/background/background.vue'),
        },
      ]
    },
  ]
})
