import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user'
import routes from './routes'


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const user = useUserStore()
    next()
})
router.afterEach((to, from) => {
    
})
export default router

