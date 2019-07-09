import Mock from 'mockjs'
const infos = Mock.mock({
  'list|10': [{
    appId: '@id',
    title: '@string',
    'typeString|1': ['成功', '失败'],
    'status|1': '@integer(int32)',
    text: '@string',
    pushType: '@string'
  }]
})
const infosSmarty = Mock.mock({
  'list|10': [{
    templateId: '@id',
    title: '@string',
    text: '@string',
    pushType: '@string',
    pushCode: '@string',
    sound: '@string'
  }]
})
const pub = {
  'endRow': 0,
  'firstPage': 0,
  'hasNextPage': true,
  'hasPreviousPage': true,
  'isFirstPage': true,
  'isLastPage': true,
  'lastPage': 0,
  'navigatePages': 0,
  'navigatepageNums': [],
  'nextPage': 0,
  'orderBy': '',
  'pageNum': 0,
  'pageSize': 0,
  'pages': 0,
  'prePage': 0,
  'size': 0,
  'startRow': 0,
  'total': 0
}

export default [
  // 消息推送
  // 分页查询推送列表
  {
    url: '/general/push/listMsPush',
    type: 'post',
    response: config => {
      return {
        code: 1,
        data: {
          ...infos,
          ...pub
        },
        msg: ''
      }
    }
  },
  // 分页查询推送接收人
  {
    url: '/general/push/listMsPushUser',
    type: 'post',
    response: config => {
      return {
        code: 1,
        data: {
          ...infos,
          ...pub
        },
        msg: ''
      }
    }
  },
  // 发送推送
  {
    url: '/general/push/sendMsPush',
    type: 'post',
    response: config => {
      return {
        code: 1,
        data: { ...infos },
        msg: ''
      }
    }
  },
  // 根据ID查询推送
  {
    url: '/general/push/viewMsPushById',
    type: 'get',
    response: config => {
      return {
        code: 1,
        data: infos.list[0],
        msg: ''
      }
    }
  },
  // 消息推送模板
  // 添加推送模板
  {
    url: '/general/push/addPushTemplate',
    type: 'post',
    response: config => {
      return {
        code: 1,
        data: { ...infosSmarty },
        msg: ''
      }
    }
  },
  // 根据推送模板ID删除
  {
    url: '/general/push/deletePushTemplateById',
    type: 'get',
    response: config => {
      return {
        code: 1,
        data: infosSmarty.list[0],
        msg: ''
      }
    }
  },
  // 分页查询推送模板
  {
    url: '/general/push/listPushTemplate',
    type: 'post',
    response: config => {
      return {
        code: 1,
        data: {
          ...infosSmarty,
          ...pub
        },
        msg: ''
      }
    }
  },
  // 修改推送模板
  {
    url: '/general/push/modifyPushTemplate',
    type: 'post',
    response: config => {
      return {
        code: 1,
        data: { ...infosSmarty },
        msg: ''
      }
    }
  },
  // 根据推送模板ID查询
  {
    url: '/general/push/viewPushTemplateById',
    type: 'get',
    response: config => {
      return {
        code: 1,
        data: infosSmarty.list[0],
        msg: ''
      }
    }
  }
]

