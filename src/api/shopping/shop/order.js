import request from '@/utils/request'
// 分页查询订单集合
export function getOrderListPage(data) {
  return request({
    url: `/shopping/shop/getOrderListPage`,
    method: 'post',
    data
  })
}
