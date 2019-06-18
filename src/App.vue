<template>
  <div id="app">
<!--    <transition :name="transitionName">-->
    <!--region 是否缓存当前组件-->
    <keep-alive v-if="isKeepLive">
      <router-view class="child-view"></router-view>
    </keep-alive>
    <router-view v-else class="child-view"></router-view>
    <!--endregion-->
<!--      <router-view class="child-view"/>-->
<!--    </transition>-->
  </div>
</template>

<script>
import './assets/css/mintui-reset.css'
export default {
  name: 'App',
  computed:{
    isKeepLive () {
      return this.$route.meta.isKeepLive || false
    },
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
      transitionName: 'slide-left',
    }
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

<style>
  @import './assets/css/main.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}


.child-view {
  position: absolute;
  width:100%;
  height: 100%;
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
</style>
