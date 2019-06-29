<template>
  <div class="order">
    <v-header title="我的评价"></v-header>
    <p class="bg20"></p>
    <!--region 订单列表-->
    <div class="evaluate-list" v-if="evaluateList.length">
      <div class="evaluate-item" v-for="(item,index) in evaluateList">
        <div class="content">
          <p class="room-name">商务大床房·1间</p>
          <p class="room-date"><span>2018-12-02 离店</span><span>2018-12-03 评论</span></p>
          <div class="score-box">
            <span class="score"><span>4.5</span>分</span>
            <i class="iconfont iconpinglun2"
               v-for="(item,index) in item.score"
               :key="'facilities-yes'+index"></i>
            <i class="iconfont iconshoucang_shoucang"
               v-for="(item,index) in 5-item.score"
               :key="'facilities-no'+index"></i>
          </div>
          <p class="img-num">6张照片·留言</p>
        </div>
        <b class="right-bg"></b>
      </div>
    </div>
    <!--endregion-->

    <div class="no-order" v-show="!evaluateList.length">
      <img src="~assets/img/no-content.png">
      <p>您还没有评价哦，快去评价吧!</p>
    </div>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import orderList from "@/components/OrderList/orderList";
import footer from "@/components/Footer";
export default {
  name:'order',
  data(){
      return {
        evaluateList:[
          {score:4},
          {score:4},
          {score:4},
          {score:4},
          {score:4},
          {score:4},
          {score:4},
        ],
      }
  },
  components: {
      "v-header": header,
      "v-orderList": orderList,
  },
  mounted() {
    this.tabId = this.$route.params.id;
    console.log(this.tabId);
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
    padding-top: 100px;
  }

</style>
