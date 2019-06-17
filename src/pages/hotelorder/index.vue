<template>
  <div class="hotelorder">
    <v-header title="酒店下单"></v-header>
    <div class="top-bg"></div>
    <div class="room-info">
      <div class="room-name">
        <p>商务大床房</p>
        <p>房间详情<i class="iconfont iconarrow-right"></i></p>
      </div>
      <p class="address">太原市-小店区学府街体育路口28号</p>
      <div class="date"><span>12月01日-12月02日</span><b></b><span>共1晚</span></div>
      <p class="room-on">大床·不含早·有wifi</p>
      <div class="on-tip"><i class="iconfont iconorder-jinggao"></i>入住前可免费取消</div>
    </div>

    <div class="info-list">
      <div class="info-item van-hairline--bottom">
        <p class="label">房间数:</p>
        <p class="content">1间</p>
        <i class="iconfont iconarrow-right"></i>
      </div>
      <div class="info-item input-list van-hairline--bottom">
        <div class="input-box">
          <div class="info-item van-hairline--bottom">
            <p class="label">入住人:</p>
            <input type="text" placeholder="入住人姓名">
          </div>
          <div class="info-item">
            <p class="label">联系方式:</p>
            <input type="text" placeholder="大陆手机号码，用于接收通知" maxlength="11">
          </div>
        </div>
        <img src="~assets/img/user-icon.png">
      </div>
      <div class="info-item van-hairline--bottom">
        <p class="label">预计到店:</p>
        <p class="content"><span class="time">14:00</span>(整晚保留)</p>
        <i class="iconfont iconarrow-right"></i>
      </div>
      <div class="info-item">
        <p class="label">优惠券:</p>
        <p class="content">节日优享20元券</p>
        <i class="iconfont iconarrow-right"></i>
      </div>
    </div>


    <div class="info-list noactive" style="margin-top: 20px;">
      <div class="info-item noactive">
        <p class="label">发票:</p>
        <p class="content">请咨询前台客服开具</p>
        <i style="width: 24px"></i>
      </div>
    </div>

    <div class="hotel-tip">
      <p class="title">温馨提示：</p>
      <p class="content">取消规则：入住前可以免费取消</p>
      <p class="content">入离时间：08：00以后入住，14：00以前离店</p>
    </div>

    <div class="footer-order">
      <div class="left">
        <span class="text">总计</span><span class="price">￥253.00</span>
      </div>
      <div class="right">
        <p class="info">明细</p>
        <van-button
          :loading="is_loading"
          type="warning"
          loading-text="提交中"
        >支付</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import header from "@/components/Header/header";
export default {
    data(){
        return {
          is_loading:false,
        }
    },
    components: {
        "v-header": header,
    }
}

</script>
<style lang='less' scoped>
  @import 'index';
</style>
