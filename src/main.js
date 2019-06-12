// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import ajax from './axios'
import 'amfe-flexible/index.js'
Vue.prototype.$ajax = ajax;
// import MintUI from 'mint-ui'
// Vue.use(MintUI)

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// import { Tabbar, TabbarItem, Swipe, SwipeItem,Image,CellGroup } from 'vant'
// import 'vant/lib/index.css';
// Vue.use(Tabbar)
//   .use(TabbarItem)
//   .use(Swipe)
//   .use(SwipeItem)
//   .use(Image)
//   .use(CellGroup);

Vue.use(Vuex)
Vue.config.productionTip = false



const store = new Vuex.Store({
  state: {

  },
  mutations: {
    setUserInfo (state,userInfo){
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
