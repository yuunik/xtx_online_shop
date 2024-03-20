<script setup lang="ts">
import Category from './components/Category/index.vue'
import Banner from './components/Banner/index.vue'
import New from './components/New/index.vue'
import Hot from './components/Hot/index.vue'
import Product from './components/Product/index.vue'
</script>

<template>
  <div class="container">
    <!-- 左侧分类 -->
    <Category />
    <!-- 轮播图 -->
    <Banner />
  </div>
  <!-- 新鲜好物 -->
  <New />
  <!-- 人气推荐 -->
  <Hot />
  <!-- 产品列表 -->
  <Product />
</template>

<style scoped></style>
