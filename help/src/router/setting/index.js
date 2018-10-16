export default [
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
    }
]