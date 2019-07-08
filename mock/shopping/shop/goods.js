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
  //分页查询商品集合
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
  //新增保存商品
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
  //删除商品
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
  //修改保存商品
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
  //根据ID查询商品完整信息
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
  },
  //根据ID查询商品
  {
  	url:'/shopping/shop/getCommodityById',
  	type:'get',
  	response: config => {
  		return {
  			code:1,
  			data:goods.items[0],
  			msg:''
  		}
  	}
  }
  //根据参数查询商品
  {
  	url:'/shopping/shop/getCommodityList',
  	type:'post',
  	response: config => {
  		return {
        code: 1,
        data: [ ...goods.items],
        msg: ''
      }
  	}
  },
  //分页查询商品完整信息集合
  {
  	url:'/shopping/shop/listCommodityInfo',
  	type:'post',
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
  }
]
