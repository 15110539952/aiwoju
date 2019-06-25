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

    <transition :name="transitionName">
    <keep-alive include = 'hotelorder'>
      <router-view v-if="$route.meta.isKeepLive" class="child-view"></router-view>
    </keep-alive>
    </transition>

    <transition :name="transitionName">
      <router-view v-if="!$route.meta.isKeepLive" class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import './assets/css/mintui-reset.css'
export default {
  name: 'App',
  computed:{
    // isKeepLive () {
    //   // console.log(this.$route.meta.isKeepLive || false);
    //   return this.$route.meta.isKeepLive || false
    // },
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
  },
  data (){
    return {
      transitionName: 'slide-right',
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
  @import './assets/css/main.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
  }


  .child-view {
    position: relative;
    width:100%;
    min-height: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
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
