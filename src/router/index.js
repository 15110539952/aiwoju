import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/pages/404/404.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('pages/Home/home'),
    },
    {
      path: '/me',
      name: 'me', // 登录
      component: () => import('pages/me'),
    },
    {
      path: '/hotel',
      name: 'hotel', // 酒店房间
      component: () => import('pages/hotel'),
    },
    {
      path: '/hotelorder',
      name: 'hotelorder', // 酒店下单
      component: () => import('pages/hotelorder'),
      meta: {
        isKeepLive: true
      }
    },
    {
      path: '/order',
      name: 'order', // 主页订单
      component: () => import('pages/order'),
    },
    { path: '*', name: '404', component: NotFound }
  ]
})
