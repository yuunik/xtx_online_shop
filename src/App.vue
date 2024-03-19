<script setup lang="ts">
import useCounterStore from '@/store/counter'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const counterStore = useCounterStore()
// 解构状态
const { count, channelList } = storeToRefs(counterStore)
// 解构方法
const { increment, getChannelList } = counterStore

// 组件挂载时调用
onMounted(() => {
  // 获取频道列表
  getChannelList()
})
</script>

<template>
  <!--  一级路由出口  -->
  <RouterView></RouterView>
</template>

<style scoped lang="scss">
.test {
  color: $successColor;
}
</style>
