import request from '@/utils/request'
// 分页查询推送列表
export function listMsPush(data) {
  return request({
    url: '/general/push/listMsPush',
    method: 'post',
    data
  })
}
// 分页查询推送接收人
export function listMsPushUser(data) {
  return request({
    url: '/general/push/listMsPushUser',
    method: 'post',
    data
  })
}
// 发送推送
export function sendMsPush(data) {
  return request({
    url: '/general/push/sendMsPush',
    method: 'post',
    data
  })
}
// 根据ID查询推送
export function viewMsPushById(params) {
  return request({
    url: '/general/push/viewMsPushById',
    method: 'get',
    params
  })
}

// 添加推送模板
export function addPushTemplate(data) {
  return request({
    url: '/general/push/addPushTemplate',
    method: 'post',
    data
  })
}
//根据推送模板ID删除
export function deletePushTemplateById(params) {
  return request({
    url: '/general/push/deletePushTemplateById',
    method: 'get',
    params
  })
}
//分页查询推送模板
export function listPushTemplate(data) {
  return request({
    url: '/general/push/listPushTemplate',
    method: 'post',
    data
  })
}
//修改推送模板
export function modifyPushTemplate(data) {
  return request({
    url: '/general/push/modifyPushTemplate',
    method: 'post',
    data
  })
}
//根据推送模板ID查询
export function viewPushTemplateById(params) {
  return request({
    url: '/general/push/viewPushTemplateById',
    method: 'get',
    params
  })
}