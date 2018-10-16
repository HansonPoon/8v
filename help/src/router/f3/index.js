export default [
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
]