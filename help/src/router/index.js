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
    {
      path: '/setting',
      name: 'setting',
      component: () => import('@/view/home/me/setting/setting.vue')
    },
    {
      path: '/myinvite',
      name: 'myinvite',
      component: () => import('@/view/home/me/myinvite.vue')
    },
    {
      path: '/mybuyorder',
      name: 'mybuyorder',
      component: () => import('@/view/home/me/mybuyorder.vue')
    },
    {
      path: '/mysellorder',
      name: 'mysellorder',
      component: () => import('@/view/home/me/mysellorder.vue')
    },
    {
      path: '/myticket',
      name: 'myticket',
      component: () => import('@/view/home/me/myticket.vue')
    },
    {
      path: '/receiveaddress',
      name: 'receiveaddress',
      component: () => import('@/view/home/me/setting/receiveaddress.vue')
    },
    {
      path: '/tradepasswd',
      name: 'tradepasswd',
      component: () => import('@/view/home/me/setting/tradepasswd.vue')
    },
    {
      path: '/loginpasswd',
      name: 'loginpasswd',
      component: () => import('@/view/home/me/setting/loginpasswd.vue')
    },
    {
      path: '/changereceiveaddress',
      name: 'changereceiveaddress',
      component: () => import('@/view/home/me/setting/changereceiveaddress.vue')
    },
    {
      path: '/starrule',
      name: 'starrule',
      component: () => import('@/view/home/me/starrule.vue')
    },
    {
      path: '/balance',
      name: 'balance',
      component: () => import('@/view/home/me/balance.vue')
    },
    {
      path: '/interest',
      name: 'interest',
      component: () => import('@/view/home/me/interest.vue')
    },
    {
      path: '/principal',
      name: 'principal',
      component: () => import('@/view/home/me/principal.vue')
    },
    {
      path: '/invitemoney',
      name: 'invitemoney',
      component: () => import('@/view/home/me/invitemoney.vue')
    },
    {
      path: '/share',
      name: 'share',
      component: () => import('@/view/home/me/share/share.vue')
    }


  ]
})
