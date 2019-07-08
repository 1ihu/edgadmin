import Mock from 'mockjs'
const order = Mock.mock({
  'items|10': [{
    orderId: '@id',
    orderNo: '@integer(0, 12)',
    receiver: '@cname(0, 3)',
    placeTime: '@datetime',
    mobile: '@integer(11)',
    'statusString|1': ['下单', '发货', '确认', '取消'],
    'orderCommodityVoList|2': [{
      'typeString|1': ['实物', '虚拟'],
      commodityNo: '@integer(0, 5000)',
      orderId: '@id',
      commodityName: '@csentence(0, 8)',
      price: '@integer(0, 5000)',
      count: '@integer(0, 5000)'
    }]
  }]
})
const pub = {
  isMore: 0,
  pageIndex: 1,
  pageSize: 10,
  startIndex: 0,
  totalNum: 30,
  totalPage: 1
}
export default [
  // 订单列表
  {
    url: '/shopping/shop/getOrderListPage',
    type: 'post',
    response: config => {
      return {
        code: 1,
        data: {
          ...order,
          ...pub
        },
        msg: ''
      }
    }
  }
]
