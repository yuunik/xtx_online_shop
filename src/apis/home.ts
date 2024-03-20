// 首页相关的接口
import { request } from '@/utils'
import type { XtxRes } from '@/types/basic'
import type { BannerItem } from '@/types/home'

// 获取轮播图列表
export const getBannerListAPI = (distributionSite = 1) => {
  return request<XtxRes<BannerItem[]>>({
    url: '/home/banner',
    method: 'GET',
    params: {
      distributionSite
    }
  })
}
