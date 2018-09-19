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
          redirect: '/background/',
          children:[
            {
              path: '/',
              name: 'history',
              component: () => import('@/view/background/children/history.vue'),
            },
            {
              path: 'product',
              name: 'product',
              component: () => import('@/view/background/children/product.vue'),
            },
            {
              path: 'support',
              name: 'support',
              component: () => import('@/view/background/children/support.vue'),
            },
            {
              path: 'prize',
              name: 'prize',
              component: () => import('@/view/background/children/prize.vue'),
            },
            {
              path: 'news',
              name: 'news',
              component: () => import('@/view/background/children/news.vue'),
            },
            {
              path: 'responsibility',
              name: 'responsibility',
              component: () => import('@/view/background/children/responsibility.vue'),
            },
          ]
        },
      ]
    },
  ]
})
