export default [
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
    {
        path: '/share',
        name: 'share',
        component: () => import('@/view/index_f4/share/share.vue')
    },
    {
        path: '/myqiandao',
        name: 'myqiandao',
        component: () => import('@/view/index_f4/myqiandao.vue')
    }
]