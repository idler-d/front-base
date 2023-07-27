import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    {path: '/', name: 'home', component: () => import('@/page/Home.vue')},
    {path: '/article', name: 'article', component: () => import('@/page/article/Index.vue')},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;