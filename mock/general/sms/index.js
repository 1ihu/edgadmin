import Mock from 'mockjs'
const sms = Mock.mock({
  'list|10': [{
    appId: '@id',
    smsType: '@string',
    sendUserId: '@string',
    sendMode: '@string'
  }]
})
const pub = {
  "endRow": 0,
  "firstPage": 0,
  "hasNextPage": true,
  "hasPreviousPage": true,
  "isFirstPage": true,
  "isLastPage": true,
  "lastPage": 0,
  "navigatePages": 0,
  "navigatepageNums": [],
  "nextPage": 0,
  "orderBy": "",
  "pageNum": 0,
  "pageSize": 0,
  "pages": 0,
  "prePage": 0,
  "size": 0,
  "startRow": 0,
  "total": 0
}
export default [
	//短信
	//分页查询短信
	{
      url: '/general/sms/listSmsByPage',
      type: 'post',
      response: config => {
        return {
          code: 1,
          data: {
            ...sms,
            ...pub
          },
          msg: ''
        }
      }
    },
    //分页查询短信
	{
      url: '/general/sms/listSmsUserByPage',
      type: 'post',
      response: config => {
        return {
          code: 1,
          data: {
            ...sms,
            ...pub
          },
          msg: ''
        }
      }
    },
    //发送短信
	{
      url: '/general/sms/sendSms',
      type: 'post',
      response: config => {
        return {
          code: 1,
          data: {...sms},
          msg: ''
        }
      }
    },
    //根据ID查询短信
	{
      url: '/general/sms/viewSmsById',
      type: 'get',
      response: config => {
        return {
          code: 1,
          data: sms.list[0],
          msg: ''
        }
      }
    },
]






const smsSmarty = Mock.mock({
  'list|10': [{
    smsTemplateId: '@id',
    smsCode: '@string',
    smsContent: '@string',
    smsTitle: '@string',
    smsType: '@string'
  }]
})

export default [
	//短信模板
	//添加短信模板
	{
      url: '/general/sms/addSmsTemplate',
      type: 'post',
      response: config => {
        return {
          code: 1,
          data: {...smsSmarty},
          msg: ''
        }
      }
    },
    //根据ID删除短信模板
	{
      url: '/general/sms/deleteSmsTemplateById',
      type: 'get',
      response: config => {
        return {
          code: 1,
          data: smsSmarty.list[0],
          msg: ''
        }
      }
    },
    //短信模板分页查询
	{
      url: '/general/sms/listSmsTemplateByPage',
      type: 'post',
      response: config => {
        return {
          code: 1,
          data: {
          	...smsSmarty,
          	...pub
          },
          msg: ''
        }
      }
    },
    //设置短信模板类型
	{
      url: '/general/sms/setSmsTemplateType',
      type: 'post',
      response: config => {
        return {
          code: 1,
           data: {...smsSmarty},
          msg: ''
        }
      }
    },
    //根据短信模板ID查询
	{
      url: '/general/sms/viewSmsTemplateById',
      type: 'get',
      response: config => {
        return {
          code: 1,
          data: smsSmarty.list[0],
          msg: ''
        }
      }
    },
]