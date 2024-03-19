// 首页相关接口
import { request } from '@/utils'
import type { XtxRes } from '@/types/basic'
import type { CategoryItem } from '@/types/layout'
import axios from 'axios'

// 获取分类列表
export const getCategoryListAPI = () => {
  return request<XtxRes<CategoryItem[]>>({
    url: '/home/category/head',
    method: 'GET'
  })
}
