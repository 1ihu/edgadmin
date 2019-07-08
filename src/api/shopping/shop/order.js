import request from '@/utils/request'
// 分页查询订单集合
export function getOrderListPage(data) {
  return request({
    url: `/shopping/shop/getOrderListPage`,
    method: 'post',
    data
  })
}
//新增保存订单
export function addOrder(data){
	return resuest({
		url:`/shopping/shop/addOrder`,
		method:'post',
		data
	})
}
//根据id查询订单
export function getOrderById(params){
	return resuest({
		url:`/shopping/shop/getOrderById`,
		method:'get',
		params
	})
}
//根据参数查询订单
export function getOrderList(data){
	return resuest({
		url:`/shopping/shop/getOrderList`,
		method:'post',
		data
	})
}
//修改保存订单
export function modifyOrder(data){
	return request({
		url:`/shopping/shop/modifyOrder`,
		method:'post',
		data
	})
}
//修改订单状态
export function modifyOrderStatus(data){
	return request({
		url:`/shopping/shop/modifyOrderStatus`,
		method:'post',
		data
	})
}
//删除订单
export function removeOrder(data){
	return request({
		url:`/shopping/shop/removeOrder`,
		method:'post',
		data
	})
}