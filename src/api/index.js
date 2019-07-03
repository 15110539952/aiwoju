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


// import Test from './test'
//
// export {
//   Test
// }
