<template>
  <div class="home">
    <div class="banner">
      <div class="head-bg">
        <div class="head">
          <van-image
            width="100%"
            height="100%"
            fit="cover"
            :src="require('assets/img/dear.png')"
          />
        </div>
        <p class="head-bm">Handsome</p>
      </div>
      <p class="username">星旅者XT01</p>
    </div>
    <div class="me-type">
      <div class="item one"><span>99999999</span><p>当前佣金</p></div>
      <div class="item two"><span>99999999</span><p>已提取</p></div>
      <div class="item three"><span>99999999</span><p>可提取</p></div>
    </div>
    <div class="draw-commission">提取佣金</div>


  </div>
</template>

<script>
import header from "@/components/Header/header";
import { Dialog } from 'vant';

export default {
  data(){
      return {

      }
  },
  components: {
      "v-header": header,
  },
  mounted(){},
  methods:{
    changePhone(){

      Dialog.confirm({
        title: '确认更换手机号？',
        message: ''
      }).then(() => {
        // on confirm
        this.$router.push('/setting/phone');
      }).catch(() => {
        // on cancel
      });
    },
    outLogin(){

      Dialog.confirm({
        title: '确认推出登录？',
        confirmButtonText:'退出',
        message: ''
      }).then(() => {
        // on confirm
      }).catch(() => {
        // on cancel
      });
    },
  }
}

</script>
<style lang='less' scoped>
  @import 'index';
  .set-list{
    font-size: 24px;
    color: #333333;
    line-height: 90px;
    padding: 0 40px;
    .item{
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      &:active{
        background: #f2f3f5;
      }
      .iconfont:before{
        color: #086fa1;
        font-size: 20px;
      }
      .item-text{
        margin-right: 20px;
      }
      //position: relative;
      //&:after{
      //  content: '';
      //  width: 670px;
      //  position: absolute;
      //  bottom: 0;
      //  left: 40px;
      //  height: 1px;
      //  background: #eee;
      //}
    }
  }
  .outLogin{
    position: fixed;
    width: 670px;
    left: 40px;
    bottom: 107px;
    border-radius: 10px;
    border: solid 1px #666666;
    background: #fff;
    color: #666;font-size: 36px;

  }
</style>
