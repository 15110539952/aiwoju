import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '@/pages/404/404.vue'
Vue.use(Router)

Router.prototype.goBack = function (back) {
  this.isBack = true;
  this.back(back);
}

export default new Router({
  beforeEach(to, from, next) {
    if (to.meta.background === 'white') {
      document.querySelector('body').setAttribute('style', 'background: #ffffff')
    } else {
      document.querySelector('body').setAttribute('style', 'background: #f8f8f8')
    }
  },
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
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
      path: '/hotelDetail',
      name: 'hotelDetail', // 酒店详情
      component: () => import('pages/hotelDetail'),
    },
    {
      path: '/payOrder',
      name: 'payOrder', // 订单支付
      component: () => import('pages/payOrder'),
    },
    {
      path: '/orderDetail',
      name: 'orderDetail', // 订单详情
      component: () => import('pages/orderDetail'),
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
    {
      path: '/myorder',
      name: 'myorder', // 主页订单
      component: () => import('pages/myorder'),
    },
    {
      path: '/setting',
      name: 'setting', // 设置
      component: () => import('pages/setting'),
      redirect: '/setting/home',
      children: [
        {
          path: 'home',
          name: 'set-home', // 设置
          component: () => import('pages/setting/home')
        },
        {
          path: 'user',
          name: 'user', // 个人信息
          component: () => import('pages/setting/user')
        },
        {
          path: 'social',
          name: 'social', // 社交账号
          component: () => import('pages/setting/social')
        },
        {
          path: 'phone',
          name: 'set-phone', // 修改手机号
          component: () => import('pages/setting/phone'),
          meta:{
            background: 'white'
          }
        },
      ]
    },
    {
      path: '/contacts',
      name: 'contacts', // 联系人
      component: () => import('pages/contacts'),
      redirect: '/contacts/home',
      children: [
        {
          path: 'home',
          name: 'contacts-home', // 联系人列表
          meta:{
            background: 'white'
          },
          component: () => import('pages/contacts/home')
        },
        {
          path: 'save',
          name: 'contacts-save', // 新增联系人
          meta:{
            background: 'white'
          },
          component: () => import('pages/contacts/save')
        },
      ]
    },
    { path: '*', name: '404', component: NotFound }
  ]
})
