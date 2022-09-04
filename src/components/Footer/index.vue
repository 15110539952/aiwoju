<template>
  <div class="footer">
    <van-tabbar
      route
      v-model="active"
      active-color="#FF8900"
      inactive-color="#333"
    >
      <van-tabbar-item
        replace
        to="/"
      >
        <span>首页</span>
        <img
          class="home"
          slot="icon"
          slot-scope="props"
          :src="props.active ? iconList[0].active : iconList[0].normal">
      </van-tabbar-item>
      <van-tabbar-item
        @click="goOrder"
        replace>
        <span>订单</span>
        <img
          class="order"
          slot="icon"
          slot-scope="props"
          :src="props.active ? iconList[1].active : iconList[1].normal">
      </van-tabbar-item>
      <van-tabbar-item
        @click="goMe"
        replace>
        <span>个人中心</span>
        <img
          class="me"
          slot="icon"
          slot-scope="props"
          :src="props.active ? iconList[2].active : iconList[2].normal">
      </van-tabbar-item>
    </van-tabbar>


<!--    to="/order"-->
<!--    to="/me"-->
  </div>
</template>

<script>
export default {
  name:'Footer',
  props:{
    appid: {
      default: ''
    },
    scope: {
      default: ''
    },
    is_grant: {
      default: false
    },
  },
  data() {
    return {
      active: 0,
      iconList:[
        {
          normal: require('assets/img/home.png'),
          active: require('assets/img/home-active.png')
        },
        {
          normal: require('assets/img/order.png'),
          active: require('assets/img/order-active.png')
        },
        {
          normal: require('assets/img/me.png'),
          active: require('assets/img/me-active.png')
        }
      ],
    }
  },
  mounted(){
    console.log(this.appid,this.scope,this.is_grant);
  },
  methods:{
    goMe(){
      if(this.is_grant){
        // console.log(this.appid,this.scope,this.is_grant);
        let href = window.location.href.split('#')[0].split('?')[0]+'#/me';
        // console.log(href);
        location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${ this.appid }&redirect_uri=${ encodeURIComponent(href) }&response_type=code&scope=${ this.scope }&state=#wechat_redirect`;
      }else{
        this.$router.push('/me');
      }
    },
    goOrder(){
      if(this.is_grant){
        let href = window.location.href.split('#')[0].split('?')[0]+'#/order';
        location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${ this.appid }&redirect_uri=${ encodeURIComponent(href) }&response_type=code&scope=${ this.scope }&state=#wechat_redirect`;
      }else{
        this.$router.push('/order');
      }

    }
  }
}

</script>
<style lang='less' scoped>
  .footer{
    position: fixed;
    width: 100%;
    height: 100px;
    left: 0;
    bottom: 0;
  }
  img{
    &.home{
      width: 51px;
      height: 50px;
    }
    &.order{
      width: 46px;
      height: 48px;
    }
    &.me{
      width: 48px;
      height: 50px;
    }
  }
</style>
