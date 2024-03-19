// 首页模块相关数据类型

// 一级分类类型
export type CategoryItem = {
  /**
   * 二级分类数组
   */
  children: SubCategoryItem[]
  /**
   * 一级分类下属商品
   */
  goods: GoodsItem[]
  /**
   * 一级分类id
   */
  id: string
  /**
   * 一级分类名字
   */
  name: string
  /**
   * 一级分类图片
   */
  picture: string
}

/* 二级分类类型 */
export type SubCategoryItem = {
  /**
   * 三级分类数组，三级分类数组(暂无)
   */
  children: null
  /**
   * 二级级分类下属商品数组，二级分类商品数组(暂无)
   */
  goods: null
  /**
   * 二级分类id
   */
  id: string
  /**
   * 二级分类名字
   */
  name: string
  /**
   * 二级分类图片
   */
  picture: string
}

/* 商品类型 */
export type GoodsItem = {
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品折扣，如为null时，即无折扣
   */
  discount: null
  /**
   * 商品id
   */
  id: string
  /**
   * 商品名字
   */
  name: string
  /**
   * 商品销量
   */
  orderNum: null
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: string
}
