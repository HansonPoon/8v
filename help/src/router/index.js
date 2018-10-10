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
      path: '/index',
      name: 'index',
      component: () => import('@/view/index/index.vue')
    },
    /* f3 */
    {
      path: '/touzhu',
      name: 'touzhu',
      component: () => import('@/view/index_f3/touzhu')
    },
    {
      path: '/touzhuDetail',
      name: 'touzhuDetail',
      component: () => import('@/view/index_f3/touzhuDetail')
    },
    {
      path: '/tixian',
      name: 'tixian',
      component: () => import('@/view/index_f3/tixian')
    },
    {
      path: '/tixianDetail',
      name: 'tixianDetail',
      component: () => import('@/view/index_f3/tixianDetail')
    },
    {
      path: '/zhuanzhang',
      name: 'zhuanzhang',
      component: () => import('@/view/index_f3/zhuanzhang')
    },
    /* f4 */
    {
      path: '/yueDetail',
      name: 'yueDetail',
      component: () => import('@/view/index_f4/yueDetail')
    },
    {
      path: '/myinvite',
      name: 'myinvite',
      component: () => import('@/view/index_f4/myinvite')
    },
    {
      path: '/myteam',
      name: 'myteam',
      component: () => import('@/view/index_f4/myteam')
    },
/* 设置 */
{
  path: '/setting',
  name: 'setting',
  component: () => import('@/view/index_f4/setting/setting.vue')
},
{
  path: '/receiveaddress',
  name: 'receiveaddress',
  component: () => import('@/view/index_f4/setting/receiveaddress.vue')
},
{
  path: '/tradepasswd',
  name: 'tradepasswd',
  component: () => import('@/view/index_f4/setting/tradepasswd.vue')
},
{
  path: '/loginpasswd',
  name: 'loginpasswd',
  component: () => import('@/view/index_f4/setting/loginpasswd.vue')
},
{
  path: '/changereceiveaddress',
  name: 'changereceiveaddress',
  component: () => import('@/view/index_f4/setting/changereceiveaddress.vue')
},






    {
      path: '/home',
      name: 'home',
      component: () => import('@/view/home/home.vue'),
      redirect: 'otc',
      children: [
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
