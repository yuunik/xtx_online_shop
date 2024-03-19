<script setup lang="ts">
import TopNav from './components/TopNav/index.vue'
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
</script>

<template>
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
