<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getBannerListAPI } from '@/apis/home'
import type { BannerItem } from '@/types/home'

// 轮播图列表
const bannerList = ref<BannerItem[]>([])

// 组件挂载完成后执行
onMounted(async () => {
  const result = await getBannerListAPI()
  // 获取轮播图列表
  bannerList.value = result.data.result
})
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="banner in bannerList" :key="banner.id">
        <img :src="banner.imgUrl" alt="商品轮播图" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>
