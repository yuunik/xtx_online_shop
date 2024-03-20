<script setup lang="ts">
import useCategoryStore from '@/store/category'
import { onMounted } from 'vue'

import TopNav from './components/TopNav/index.vue'
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
import FixedBar from './components/FixedBar/index.vue'

// 获取分类的状态管理库
const categoryStore = useCategoryStore()
const { getCategoryList } = categoryStore

// 组件挂载完成后调用
onMounted(() => {
  // 获取分类列表
  getCategoryList()
})
</script>

<template>
  <!-- 吸顶导航栏 -->
  <FixedBar />
  <!-- 顶部导航栏 -->
  <TopNav />
  <!-- 头部 -->
  <Header />
  <!-- 二级路由出口 -->
  <RouterView />
  <!-- 底部 -->
  <Footer />
</template>

<style scoped lang="scss"></style>
