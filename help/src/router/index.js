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
      path: '/register',
      name: 'register',
      component: () => import('@/view/log/register.vue')
    },
    {
      path: '/forgetpassword',
      name: 'forgetpassword',
      component: () => import('@/view/log/forgetpassword.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/view/home/home.vue'),
      redirect: 'otc',
      children:[
        {
          path: '/otc',
          name: 'otc',
          component: () => import('@/view/home/otc/otc.vue')
        },
        {
          path: '/buy',
          name: 'buy',
          component: () => import('@/view/home/otc/buy.vue')
        },
        {
          path: '/sell',
          name: 'sell',
          component: () => import('@/view/home/otc/sell.vue')
        },
        {
          path: '/rank',
          name: 'rank',
          component: () => import('@/view/home/rank/rank.vue')
        },
        {
          path: '/me',
          name: 'me',
          component: () => import('@/view/home/me/me.vue')
        },
      ]
    },


  ]
})
