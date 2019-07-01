// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import Vuex from 'vuex'
import router from './router'
import ajax from './axios'
import 'amfe-flexible/index.js'
Vue.prototype.$ajax = ajax;
Vue.prototype.$url = {
  aixingtuan:'wx.aixingtuan.com',
};
// import MintUI from 'mint-ui'
// Vue.use(MintUI)

import vant from 'vant'
import 'vant/lib/index.css'
Vue.use(vant)

// import Navigation from 'vue-navigation'
// Vue.use(Navigation, {router})

// 酒店日期选择组件
// import VueBetterCalendar from 'vue-better-calendar'
// Vue.use(VueBetterCalendar)
import Calendar from 'vue-mobile-calendar'
Vue.use(Calendar);

// import { Tabbar, TabbarItem, Swipe, SwipeItem,Image,CellGroup } from 'vant'
// import 'vant/lib/index.css';
// Vue.use(Tabbar)
//   .use(TabbarItem)
//   .use(Swipe)
//   .use(SwipeItem)
//   .use(Image)
//   .use(CellGroup);

// Vue.use(Vuex)
// const store = new Vuex.Store({
//   state: {
//
//   },
//   mutations: {
//     setUserInfo (state,userInfo){
//     }
//   }
// })

// main.js中全局引入工具
import utils from './utils/index.js'
Vue.prototype.$utils = utils;

import store from './vuex/store'

// 路由全局守卫 修改背景颜色
router.beforeEach((to, from, next) => {
  if (to.meta.background === 'white') {
    document.querySelector('body').setAttribute('style', 'background: #ffffff')
  } else {
    document.querySelector('body').setAttribute('style', 'background: #f8f8f8')
  }
  next();
});

Vue.config.productionTip = false

/* eslint-disable no-new */
window.$globalHub = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
