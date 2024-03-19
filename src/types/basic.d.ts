// 基础返回类型
export type XtxRes<T> = {
  /* 业务状态码 */
  code: string
  /* 响应消息 */
  msg: string
  /* 响应结果 */
  result: T
}
