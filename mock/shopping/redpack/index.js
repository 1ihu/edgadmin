import Mock from 'mockjs'
const order = Mock.mock({
  'items|10': [{
    ruleId: '@id',
    'amount|1-100': 100,
    ruleCode: '@string(5)',
    ruleName: '@ctitle(3,5)',
    'ruleTypeId|1': [1, 2, 3],
    'status|1': [1, 2],
    'typeCode': '@string(5)',
    'typeName': '@string("upper", 5)',
    'CreationTime': '@now()'
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
  // 分页查询订单集合
  {
    url: '/shopping/redpack/getRedpackRuleTypeListPage',
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
  },
  //   新增红包管理
  {
    url: '/shopping/redpack/addRedpackRuleType',
    type: 'post',
    response: config => {
      return {
        code: 1,
        data: {
          ...order
        },
        msg: '保存成功'
      }
    }
  }
]
