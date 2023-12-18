import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/students',
      name: 'students',
      component: () => import('@/pages/students.vue')
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import('@/pages/teachers.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('@/pages/courses.vue')
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import('@/pages/teachers.vue')
    },
  ]
})

export default router
