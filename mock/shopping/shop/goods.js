import Mock from 'mockjs'

const goods = Mock.mock({
  'items|10': [{
    commodityId: '@id',
    commodityName: '@csentence(5, 15)',
    'typeString|1': ['实物', '虚拟'],
    'status|1': [2, 1],
    releaseTime: '@datetime',
    price: '@integer(0, 5000)',
    commodityNo: '@integer(0, 5000)',
    stock: '@integer(0, 5000)'
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
  // 商品列表
  {
    url: '/shopping/shop/getCommodityListPage',
    type: 'post',
    response: config => {
      return {
        code: 1,
        data: {
          ...goods,
          ...pub
        },
        msg: ''
      }
    }
  },
  {
    url: '/shopping/shop/addCommodity',
    type: 'post',
    response: config => {
      return {
        code: 1,
        data: { ...goods },
        msg: ''
      }
    }
  },
  {
    url: '/shopping/shop/removeCommodity',
    type: 'post',
    response: config => {
      return {
        code: 1,
        data: { ...goods },
        msg: ''
      }
    }
  },
  {
    url: '/shopping/shop/modifyCommodity',
    type: 'post',
    response: config => {
      return {
        code: 1,
        data: { ...goods },
        msg: ''
      }
    }
  },
  {
    url: '/shopping/shop/getCommodityInfoById',
    type: 'get',
    response: config => {
      return {
        code: 1,
        data: goods.items[0],
        msg: ''
      }
    }
  }
]