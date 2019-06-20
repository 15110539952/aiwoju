<template>
  <div class="pay-order">
    <v-header title="订单支付"></v-header>
    <div class="order-detail">
      <p class="room-name">商务大床房</p>
      <div class="room-info"><span>大床·不含早·有wifi</span><span>12月01日-12月02日 共1晚</span></div>
    </div>
    <div class="time">支付剩余时间  00：29：59</div>
    <div class="price">￥<span>253.00</span></div>
    <div class="room-tip">
      <p>商务大床房·不含早·1月2日入住</p>
      <!--      <i class="iconfont iconarrow-right"></i>-->
    </div>
    <div class="price-type">
      <div class="weixin van-hairline--bottom" @click="priceId = 1">
        <p class="left">
          <i class="iconfont iconweixin"></i>
          <span>微信支付</span>
        </p>
        <i class="iconfont iconxuanze-duoxuan" :class="priceId===1?'active':''"></i>
      </div>
      <div class="alipay" @click="priceId = 2">
        <p class="left">
          <i class="iconfont iconzhifubao"></i>
          <span>支付宝支付</span>
        </p>
        <i class="iconfont iconxuanze-duoxuan" :class="priceId===2?'active':''"></i>
      </div>
    </div>
    <van-button type="primary" size="large" @click="pay">确认支付</van-button>
    <van-popup v-model="isPay">
      <div class="is-pay">
        <p class="title-tip">支付未完成</p>
        <p class="price">￥<span>253.00</span></p>
        <p class="tip-content">如已扣款，但订单未能完成请及时联系客服</p>
        <div class="btn van-hairline--top">
          <b></b>
          <p class="left" @click="pay('1')">稍后支付</p>
          <p class="right" @click="pay('2')">重新支付</p>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import banner from "@/components/Banner/banner";
import article from "@/components/Article/article";
import footer from "@/components/Footer";
export default {
  data(){
      return {
        priceId:1,
        isPay:false,
      }
  },
  components: {
      "v-header": header,
  },
  methods:{
    pay(index){
      if(index === '1'){
        this.isPay = false;
        this.$router.push('/orderDetail');
      }else if(index === '2'){
        this.isPay = false;
      }else{
        this.isPay = true;
      }
    }
  }
}

</script>
<style lang='less' scoped>
@import "index";
  .child-view{
    padding-top: 100px;
  }
</style>
