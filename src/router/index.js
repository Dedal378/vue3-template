import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'router-link-exact-active',
  linkExactActiveClass: 'router-link-exact-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('@/views/AsyncView.vue'),
    },
    {
      path: '/renderless',
      name: 'renderless',
      component: () => import('@/views/RenderlessView.vue'),
    }
  ],
})

export default router
