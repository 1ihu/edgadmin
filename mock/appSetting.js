const pub = {
  isMore: 0,
  pageIndex: 1,
  pageSize: 10,
  startIndex: 0,
  totalNum: 1,
  totalPage: 1
}
export default [
  {
    url: '/shopping/shop/getCommodityListPage111',
    type: 'post',
    response: config => {
      return {
        code: 1,
        data: [],
        msg: '',
        ...pub
      }
    }
  }
]
