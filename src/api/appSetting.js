import request from '@/utils/request'

export function getCommodityListPage(data) {
  return request({
    url: '/shopping/shop/getCommodityListPage',
    method: 'post',
    data
  })
}
