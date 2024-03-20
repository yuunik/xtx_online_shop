// 分类相关的状态管理库
import { defineStore } from 'pinia'
import { getCategoryListAPI } from '@/apis/layout'
import { ref } from 'vue'
import type { CategoryItem } from '@/types/layout'

// 创建仓库
const useCategoryStore = defineStore('category', () => {
  // 分类列表
  const categoryList = ref<CategoryItem[]>([])

  // 获取分类列表
  const getCategoryList = async () => {
    // 调用接口, 获取分类列表
    const result = await getCategoryListAPI()
    // 获取分类列表
    categoryList.value = result.data.result
  }

  return {
    categoryList,
    getCategoryList
  }
})

export default useCategoryStore
