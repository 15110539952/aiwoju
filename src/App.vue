<template>
  <div id="app">
    <!--    <transition :name="transitionName"></transition>-->
    <!--region 是否缓存当前组件-->
    <!--endregion-->

<!--    <transition :name="transitionName">-->
<!--      <navigation>-->
<!--        <router-view class="child-view"></router-view>-->
<!--      </navigation>-->
<!--    </transition>-->
<!--    <transition :name="transitionName">-->
<!--      <keep-alive include = 'hotelorder'>-->
<!--        <router-view class="child-view"></router-view>-->
<!--      </keep-alive>-->
<!--    </transition>-->

    <transition :name="transitionFade">
    <keep-alive>
      <router-view v-if="$route.meta.isKeepLive" class="child-view"></router-view>
    </keep-alive>
    </transition>

    <transition :name="transitionFade">
      <router-view v-if="!$route.meta.isKeepLive" class="child-view"></router-view>
    </transition>

<!--    <van-loading v-show="loading.show"-->
<!--                 class="loading-bg"-->
<!--                 size="100px"-->
<!--                 text-size="50px"-->
<!--                 type="spinner"-->
<!--                 vertical>{{loading.msg}}</van-loading>-->
  </div>
</template>

<script>
import './assets/css/mintui-reset.css'
import wx from 'weixin-jsapi'
import {getSign,hotelShare} from '@/api/index'
import {commonJs}  from '@/commonJs/index.js'
import { Toast } from 'vant';

export default {
  name: 'App',
  computed:{
    loading () {
      return { show:true, msg: '加载中' }
      // return this.$store.getters.loading
    },
    token(){
      return this.$store.getters.token
    }
  },
  mounted() {

    // document.addEventListener('DOMContentLoaded', function () {
    //   var deviceWidth = document.documentElement.clientWidth
    //   document.documentElement.style.fontSize = deviceWidth / 10 + 'px'
    // }, false)
    // window.onresize = function () {
    //   var deviceWidth = document.documentElement.clientWidth
    //   document.documentElement.style.fontSize = deviceWidth / 10 + 'px'
    // }
    // console.log(window.location.href)
    // let appid = 'wxc4c761371120fe9b'; // 星团公众号
    let appid = 'wxc142f2f0effc3768'; // 曼节奏主题公寓

    let dateTime = new Date().getTime();
    let expires_in = localStorage.getItem('expires_in');
    if(dateTime>parseInt(expires_in)){
      localStorage.clear();
      location.href = window.location.href.split('#')[0].split('?')[0];
    }
    if(process.env.NODE_ENV === 'development'){
      // this.$store.dispatch('setToken', {token:'7b97a4b6-ec85-44d2-8bfb-2be92d09c7e3',expires_in:31536000});
      this.$store.dispatch('setToken', {token:'539e86e8-494c-4da4-8994-c77dfddedc8c',expires_in:31536000});
      console.log(this.token);
    }else{
      if(!this.token)
      {
        let code = this.$utils.getUrlKey('code');
        if(!code){
          let invite = this.$utils.getUrlKey('invite') || '';
          location.href=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code&scope=snsapi_base&state=${invite}#wechat_redirect`;
        }else{
          let state = this.$utils.getUrlKey('state') || '';
          state = state.split('#')[0];
          this.$ajax.get('api/user/third',{code:code,invite:state}).then((res)=>{
            console.log(res);
            this.$store.dispatch('setToken', {token:res.data.token,expires_in:res.data.expires_in});
            setTimeout(()=>{
              location.href = window.location.href.split('#')[0].split('?')[0];
            },200);
          });
        }
      }
    }
    setTimeout(()=>{
      hotelShare().then(res=>{
        this.share = res.data;
        this.wxShare();
      });
    },1000);
    // console.log()
    // console.log(window.location.href.split('#')[0].split('?')[0]);
  },
  data (){
    return {
      transitionFade: 'fade',
      share:'',
      // transitionName: 'slide-right',
    }
  },
  watch:{
    '$route' (to, from) {
      if(to.name === 'home'
        || to.name === 'me'
        || to.name === 'order'){
        if(from.name === 'home'
          || from.name === 'me'
          || from.name === 'order'){
          this.transitionName = 'fade';
          return;
        }
      }
      let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
      if(isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    },
  },
  methods:{
    wxShare(){
      let link = window.location.href.split('#')[0].split('?')[0];
      getSign().then(res=>{
        let data = res.data;
        this.wxSign = data;
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: data.appId, // 必填，公众号的唯一标识
          timestamp: data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature: data.signature,// 必填，签名，见附录1
          jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'],
          // jsApiList: ['updateAppMessageShareData','updateTimelineShareData'],
        });
      });
      wx.ready(() => {   //需在用户可能点击分享按钮前就先调用
        wx.onMenuShareAppMessage({
          title: this.share.fenxiang_title || '', // 分享标题
          desc: this.share.fenxiang_zhaiyao || '', // 分享描述
          link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: commonJs.url.this.share.fenxiang_image || '', // 分享图标
          success: function () {
            // 设置成功
          }
        })
      });
      wx.ready(() => {      //需在用户可能点击分享按钮前就先调用
        wx.onMenuShareTimeline({
          title: this.share.fenxiang_title || '', // 分享标题
          link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: commonJs.url+this.share.fenxiang_image || '', // 分享图标
          success: function () {
            // 设置成功
          }
        })
      });
    },
  },
  activated(){

  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false
    next()
  },
}
</script>

<style lang="less">
  @import 'assets/css/main.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
    position: fixed;
    width: 100%;
  }


  .child-view {
    position: absolute;
    width:100%;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    /*width: 100%;*/
    /*height:100%;*/
    /*position: absolute;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*margin: 0 auto;*/
    /*overflow-y: auto;*/
    /*overflow-x: hidden;*/
    /*-webkit-overflow-scrolling: touch;*/
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }


  // 确认弹窗 样式修改vant
  .van-dialog__footer--buttons{
    .van-button--default{
      .van-button__text{
        color: #0778af;
      }
    }
    .van-dialog__confirm{
      .van-button__text{
        color: #ff3500;
      }
    }
  }

</style>
