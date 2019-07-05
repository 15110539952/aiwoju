<template>
  <div class="pay-order">
    <v-header title="订单支付"></v-header>
    <div class="order-detail">
      <p class="room-name">{{orderInfor.hotel_room_type_id}}</p>
      <div class="room-info">
        <p class="left">
          <span v-for="item in orderInfor.open">{{item}}<i>.</i></span>
        </p>
        <span>{{startDateText}}-{{endDateText}} 共{{orderInfor.day_count}}晚</span>
      </div>
    </div>
    <div class="time">支付剩余时间  {{arrTime[0]+':'+arrTime[1]+':'+arrTime[2]}}</div>
    <div class="price">￥<span>{{orderInfor.total_amount}}</span></div>
    <div class="room-tip">
      <p>{{orderInfor.hotel_room_type_id}}·{{orderInfor.breakfast}}·{{startDateText}}入住</p>
      <!--      <i class="iconfont iconarrow-right"></i>-->
    </div>
    <div class="price-type">
      <div class="weixin" @click="priceId = 1">
        <p class="left">
          <i class="iconfont iconweixin"></i>
          <span>微信支付</span>
        </p>
        <i class="iconfont iconxuanze-duoxuan" :class="priceId===1?'active':''"></i>
      </div>
<!--      <div class="alipay" @click="priceId = 2">-->
<!--        <p class="left">-->
<!--          <i class="iconfont iconzhifubao"></i>-->
<!--          <span>支付宝支付</span>-->
<!--        </p>-->
<!--        <i class="iconfont iconxuanze-duoxuan" :class="priceId===2?'active':''"></i>-->
<!--      </div>-->
    </div>
    <van-button type="primary" size="large" @click="pay">确认支付</van-button>
    <van-popup v-model="isPay">
      <div class="is-pay">
        <p class="title-tip">支付未完成</p>
        <p class="price">￥<span>{{orderInfor.total_amount}}</span></p>
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
import { Toast } from 'vant'
import {commonUrl,isten,countDown}  from '@/commonJs/index.js'
import {orderInfor} from '@/api/index'
let moment = require('moment');

export default {
  data(){
      return {
        id:'',
        priceId:1,
        isPay:false,
        orderInfor:'',
        startDateText:'',
        endDateText:'',
        createtime:'',
        arrTime:['00','00','00']
      }
  },
  components: {
      "v-header": header,
  },
  mounted(){
    this.id = this.$route.query.id || '';
    console.log(this.id);
    if(!this.id){
      this.$router.goBack(-1);
    }
    orderInfor({order_id:this.id}).then(res=>{
      if(res.code === 4002){
        this.$router.goBack();
        Toast('订单失效');
      }
      this.orderInfor = res.data;
      let s = moment(res.data.predict_begin_time).toArray();
      let e = moment(res.data.predict_end_time).toArray();
      this.startDateText = isten(s[1]+=1)+'月'+isten(s[2])+'日';
      this.endDateText = isten(e[1]+=1)+'月'+isten(e[2])+'日';

      this.createtime = res.data.createtime.length === 13?res.data.createtime.length:res.data.createtime*1000;
    })
    setInterval(() => {
      let endTime = this.createtime+30*60*1000;
      let nowTime = new Date().getTime();
      this.arrTime = countDown(endTime-nowTime);
    },1000);
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
    },
  }
}

</script>
<style lang='less' scoped>
@import "index";
  .child-view{
    padding-top: 100px;
  }
</style>
