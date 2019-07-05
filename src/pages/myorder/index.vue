<template>
  <div class="order">
    <v-header title="订单"></v-header>
    <div class="order-tab">
      <div class="tab one"
           :class="tabId===1?'active':''"
           @click="changeTab(1)">待付款<span class="one" v-if="false">10</span></div>
      <div class="tab two"
           :class="tabId===2?'active':''"
           @click="changeTab(2)">待入住/评价<span class="two" v-if="">29</span></div>
      <div class="tab three"
           :class="tabId===3?'active':''"
           @click="changeTab(3)">退款单<span class="three" v-if="false">66</span></div>
      <div class="tab four"
           :class="tabId===0?'active':''"
           @click="changeTab(0)">全部</div>
    </div>
    <!--region 订单列表-->
    <v-orderList :orderList="orderData"></v-orderList>
    <!--endregion-->
    <div class="month-list" v-if="tabId === 0">
      <p class="month-item"><span>11</span>月订单</p>
      <p class="month-item"><span>10</span>月订单</p>
    </div>
    <p class="hotel-tip">遇到问题请拨打客服：4008525636</p>

    <div class="no-order" v-show="!orderList.length">
      <img src="~assets/img/no-content.png">
      <p>您还没有订单哦，快去逛逛吧!</p>
    </div>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import orderListTemplate from "@/components/OrderList/orderList";
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
        tabId:0,
        orderData:[],
      }
  },
  components: {
      "v-header": header,
      "v-orderList": orderListTemplate,
  },
  mounted() {
    this.tabId = this.$route.params.id;
    console.log(this.tabId);
    orderList().then(res=>{
      let dataList = res.data.data;
      dataList.forEach(item=>{
        item.status = parseInt(item.status);
      });
      this.orderData = dataList;
    })
  },
  methods:{
    changeTab(index){
      this.tabId = index;
    },
  },
  beforeDestroy() {
  },
}

</script>
<style lang='less' scoped>
  @import 'index';
  .child-view{
    padding-top: 190px;
  }

</style>
