import request from '@/utils/request'
// 分页查询短信
export function listSmsByPage(data) {
  return request({
    url: '/general/sms/listSmsByPage',
    method: 'post',
    data
  })
}
// 分页查询短信
export function listSmsUserByPage(data) {
  return request({
    url: '/general/sms/listSmsUserByPage',
    method: 'post',
    data
  })
}
// 发送短信
export function sendSms(data) {
  return request({
    url: '/general/sms/sendSms',
    method: 'post',
    data
  })
}
// 根据ID查询短信
export function viewSmsById(params) {
  return request({
    url: '/general/sms/viewSmsById',
    method: 'get',
    params
  })
}

// 添加短信模板
export function addSmsTemplate(data) {
  return request({
    url: '/general/sms/addSmsTemplate',
    method: 'post',
    data
  })
}
//根据ID删除短信模板
export function deleteSmsTemplateById(params) {
  return request({
    url: '/general/sms/deleteSmsTemplateById',
    method: 'get',
    params
  })
}
//短信模板分页查询
export function listSmsTemplateByPage(data) {
  return request({
    url: '/general/sms/listSmsTemplateByPage',
    method: 'post',
    data
  })
}
//设置短信模板类型
export function setSmsTemplateType(data) {
  return request({
    url: '/general/sms/setSmsTemplateType',
    method: 'post',
    data
  })
}
//根据短信模板ID查询
export function viewPushTemplateById(params) {
  return request({
    url: '/general/sms/viewSmsTemplateById',
    method: 'get',
    params
  })
}