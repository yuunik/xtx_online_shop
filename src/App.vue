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
  <header>
    <h1>The Application</h1>
  </header>

  <main>
    当前和为: {{ count }}
    <el-button @click="increment" type="primary">+ 1</el-button>
    <ul>
      <li v-for="channel in channelList" :key="channel.id">
        {{ channel.name }}
      </li>
    </ul>
    <!--  路由链接  -->
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/login">登录页</RouterLink>

    <!--  一级路由出口  -->
    <RouterView></RouterView>
  </main>
</template>

<style scoped></style>
