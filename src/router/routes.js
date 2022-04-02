import Basic from '@/layouts/Basic.vue'
const routes = [
    {
        path: '/',
        redirect: 'index',
        meta: {
            title: '首页'
        },
        component:Basic,
        children: [
            {
                path: 'index',
                meta: {
                    title: '首页',
                    index: '1'
                },
                component: () => import('@/pages/index/index.vue')
            },
            {
                path: 'order',
                meta: {
                    title: '我的订单',
                    index: '2'
                },
                component: () => import('@/pages/order/index.vue')
            },
        ]
    },
    {
        name: 'login',
        path: '/login',
        meta: {
            title: '登陆'
        },
        component: () => import('@/pages/login/index.vue') 
    },
    {
        path:'/:pathMatch(.*)*',
        meta: {
            title: '404'
        },
        component: () => import('@/pages/404/index.vue')
    }
]

export default routes