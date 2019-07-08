import request from '@/utils/request'
// 红包商品列表
export function getCommodityListPage(data) {
  return request({
    url: '/shopping/shop/getCommodityListPage',
    method: 'post',
    data
  })
}
// 红包商品新增
export function addCommodity(data) {
  return request({
    url: '/shopping/shop/addCommodity',
    method: 'post',
    data
  })
}
// 红包商品修改
export function modifyCommodity(data) {
  return request({
    url: '/shopping/shop/modifyCommodity',
    method: 'post',
    data
  })
}
// 红包商品删除
export function removeCommodity(data) {
  return request({
    url: '/shopping/shop/removeCommodity',
    method: 'post',
    data
  })
}
// 根据id查询商品
export function getCommodityById(params) {
  return request({
    url: `/shopping/shop/getCommodityById`,
    method: 'get',
    params
  })
}
// 根据ID查询商品完整信息
export function getCommodityInfoById(params) {
  return request({
    url: `/shopping/shop/getCommodityInfoById`,
    method: 'get',
    params
  })
}
// 分页查询订单集合
export function getOrderListPage(data) {
  return request({
    url: `/shopping/shop/getOrderListPage`,
    method: 'post',
    data
  })
}
