import ajax from '../axios'
// import axios from 'axios';
import qs from 'qs'

// 首页详情
export function home(data) {
  return ajax.get('api/index/index',null,{ load: true})
}

//首页领取积分
export function homeAddScore(data) {
  return ajax.get('api/index/score',data,{ load: true})
}

//酒店房间列表
export function hotel(data) {
  return ajax.get('api/hotel/index',data,{ load: true})
}


//酒店房间详情
export function hotelDetail(data) {
  return ajax.get('api/hotel/hotel_detail',data,{ load: true})
}

//酒店评论列表
export function hotelComment(data) {
  return ajax.get('api/hotel/hotel_comment',data,{ load: true})
}

//酒店下单信息获取
export function hotelOrder(data) {
  return ajax.get('api/order/payorder',data,{ load: true})
}


//酒店提交订单准备支付
export function orderCreate(data) {
  return ajax.get('api/order/create_order',data,{ load: true})
}

//订单支付页面信息
export function orderInfor(data) {
  return ajax.get('api/order/order_infor',data,{ load: true})
}

//订单列表
export function orderList(data) {
  return ajax.get('api/order/index',data,{ load: true})
}

//订单详情页面
export function orderDetail(data) {
  return ajax.get('api/order/detail',data,{ load: true})
}

//我的
export function user(data) {
  return ajax.get('api/user/index',data,{ load: true})
}


//个人信息显示设置
export function modify(data) {
  return ajax.get('api/user/modify',data,{ load: true})
}

// import Test from './test'
//
// export {
//   Test
// }
