export const log = [
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
    }
]