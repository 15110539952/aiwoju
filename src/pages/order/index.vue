<template>
  <div class="order">
    <div class="order-tab">
      <div class="tab"
           @click="$router.push({name:'myorder',params: {id: 1}})">待付款<span class="one" v-if="wait_pay>0">{{wait_pay}}</span></div>
      <div class="tab two"
           @click="$router.push({name:'myorder',params: {id: 2}})">待入住/评价<span class="two" v-if="wait_live>0">{{wait_live}}</span></div>
      <div class="tab"
           @click="$router.push({name:'myorder',params: {id: 3}})">退款单<span class="three" v-if="wait_refund>0">{{wait_refund}}</span></div>
      <div class="tab four"
           @click="$router.push({name:'myorder',params: {id: 0}})">全部</div>
    </div>
    <div class="new-order-title">最新订单</div>

    <!--region 订单列表-->
    <v-orderList :orderList="orderData"></v-orderList>
    <!--endregion-->


    <div class="no-order" v-show="!orderList.length">
      <img src="~assets/img/no-content.png">
      <p>您还没有订单哦，快去逛逛吧!</p>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import orderListTemplate from "@/components/OrderList/orderList";
import footer from "@/components/Footer";
import { Toast } from 'vant'
import {commonJs,weekDay}  from '@/commonJs/index.js'
import {orderList} from '@/api/index'


export default {
  name:'order',
  data(){
      return {
        orderList:[
          {
            name:'',
            status:0, // 待支付
          },
          {
            name:'',
            status:1, // 待确认
          },
          {
            name:'',
            status:2, // 待入住
          },
          {
            name:'',
            status:3, // 待评价
          },
          {
            name:'',
            status:4, // 已取消
          },
          {
            name:'',
            status:5, // 已退款
          },
          {
            name:'',
            status:6, // 已关闭
          },
        ],
        orderData:[],
        current_page:1,
        last_page:1,
        totalList:'',
        wait_pay:'',
        wait_live:'',
        wait_refund:'',
      }
  },
  components: {
      "v-header": header,
      "v-footer": footer,
      "v-orderList": orderListTemplate,
  },
  mounted() {
    orderList({status:'98'}).then(res=>{
      this.wait_pay = res.data.wait_pay;
      this.wait_live = res.data.wait_live;
      this.wait_refund = res.data.wait_refund;
      let dataList = res.data.data;
      dataList.forEach(item=>{
        item.status = parseInt(item.status);
      });
      this.orderData = dataList;
    })
  },
  beforeDestroy() {
    document.querySelector('body').removeAttribute('style')
  },
}

</script>
<style lang='less' scoped>
  @import 'index';
  .child-view{
    padding-top: 100px;
  }

</style>
