import request from '@/utils/request'

// 新增保存红包规则类型
export function addRedpackRuleType(data) {
  return request({
    url: '/shopping/redpack/addRedpackRuleType',
    method: 'post',
    data
  })
}

// 分页查询红包规则类型集合
export function getRedpackRuleTypeListPage(data) {
  return request({
    url: '/shopping/redpack/getRedpackRuleTypeListPage',
    method: 'post',
    data
  })
}
