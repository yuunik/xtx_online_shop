import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import axios from 'axios'

const useCounterStore = defineStore('counter', () => {
  // 状态初始化
  const count = ref(0)
  // 加法
  const increment = () => {
    count.value++
  }

  // 频道列表
  const channelList = ref([])
  // 异步 actions
  const getChannelList = async () => {
    const result = await axios({
      url: 'http://geek.itheima.net/v1_0/channels',
      method: 'GET'
    })
    // 获取频道列表
    channelList.value = result.data.data.channels
  }

  return {
    count,
    increment,
    channelList,
    getChannelList
  }
})

export default useCounterStore
