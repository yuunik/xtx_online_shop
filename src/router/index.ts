import { createRouter, createWebHistory } from 'vue-router'

// 一级路由
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
// 二级路由
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

// 路由器
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 路由规则
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'category',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
