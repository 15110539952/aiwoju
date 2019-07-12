<template>
  <div class="coupon">
    <v-header title=""></v-header>
    <div class="order-tab">
      <div class="tab"
           :class="tabId===0?'active':''"
           @click="changeTab(0)">领券中心
      </div>
      <div class="tab"
           :class="tabId===1?'active':''"
           @click="changeTab(1)">我的卡券
      </div>
    </div>
    <p class="bg20"></p>

    <EasyRefresh
      ref="easyRefresh"
      :userSelect="false"
      :autoLoad="false"
      :animationDuration="200"
      :loadMore="loadMore">

      <div class="coupon-list">
        <div class="coupon-item">
          <div class="left" :style="'background-image: url('+require('assets/img/blue.png')+')'">
            <div class="djq"><span>代</span><span>金</span><span>券</span></div>
            <div class="content">
              <div class="price"><span>50</span>￥</div>
              <p class="coupon">满500元使用</p>
              <p class="date">有效期至：2019/7/10 - 7/20</p>
            </div>
          </div>
<!--          <div class="left" :style="`background-image: url(${})`"></div>-->
          <div class="right">
            <p class="active">{{tabId ===1?'去使用':'点击领取'}}</p>
          </div>
        </div>
        <div class="coupon-item">
          <div class="left" :style="'background-image: url('+require('assets/img/pink.png')+')'">
            <div class="djq"><span>代</span><span>金</span><span>券</span></div>
            <div class="content">

              <div class="price"><span>9.5</span>折</div>
<!--              <p class="coupon">满500元使用</p>-->
              <p class="date">有效期至：2019/7/10 - 7/20</p>
            </div>
          </div>
<!--          <div class="left" :style="`background-image: url(${})`"></div>-->
          <div class="right">
            <p class="active">{{tabId ===1?'去使用':'点击领取'}}</p>
          </div>
        </div>
        <div class="coupon-item">
          <div class="left" :style="'background-image: url('+require('assets/img/gray.png')+')'">
            <div class="djq"><span>代</span><span>金</span><span>券</span></div>
            <div class="content">
              <div class="price"><span>9.5</span>折</div>
              <p class="coupon">满500元使用</p>
              <p class="date">有效期至：2019/7/10 - 7/20</p>
            </div>
          </div>
<!--          <div class="left" :style="`background-image: url(${})`"></div>-->
          <div class="right">
            <p class="">{{tabId ===1?'已使用':'点击领取'}}</p>
          </div>
        </div>
      </div>

      <div class="no-order" v-show="couponList.length<1">
<!--        <img src="~assets/img/no-content.png">-->
<!--        <p>您还没有订单哦，快去逛逛吧!</p>-->
      </div>

    <template v-slot:footer>
      <BallPulseFooter :height="140"/>
    </template>
    </EasyRefresh>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import { Toast } from 'vant'
import {commonJs,weekDay}  from '@/commonJs/index.js'
import {orderList} from '@/api/index'

export default {
  name:'order',
  data(){
      return {
        tabId:0,
        couponList:[],
        wait_pay:'',
        wait_live:'',
        wait_refund:'',

        last_page:'', // 最后页码
        current_page:1, // 当前第几页
      }
  },
  components: {
      "v-header": header,
  },
  mounted() {
    this.tabId = parseInt(this.$route.query.id) || 0;
    console.log(this.tabId);
    // this.getOrderList();
  },
  methods:{
    changeTab(index){
      this.tabId = index;
      sessionStorage.setItem('orderTabId',index);

      // this.orderData = [];
      this.$refs.easyRefresh.scrollTo(0,0);
      this.current_page = 1;
      // this.getOrderList();
    },
    getOrderList(){
      orderList({status: this.tabId===0?'99':this.tabId,page:this.current_page}).then(res=>{
        this.wait_pay = res.data.wait_pay;
        this.wait_live = res.data.wait_live;
        this.wait_refund = res.data.wait_refund;

        this.last_page = res.data.last_page;
        this.current_page += 1;

        let dataList = res.data.data;
        dataList.forEach(item=>{
          item.status = parseInt(item.status);
        });
        this.orderData = dataList;
      })
    },
    loadMore(done){
      if(this.current_page>this.last_page){
        Toast('没有更多了')
        done(false);
        return;
      }
      orderList({status: this.tabId===0?'99':this.tabId,page:this.current_page}).then(res=>{
        this.last_page = res.data.last_page;
        let dataList = res.data.data;
        dataList.forEach(item=>{
          item.status = parseInt(item.status);
        });
        this.orderData = this.orderData.concat(dataList);
        if(this.current_page<=this.last_page){
          this.current_page += 1;
          done(false);
        }else{
          done(false);
        }
      })
    },
  },
  activated(){
    this.room_type_id = this.$route.query.id;
    if(this.$route.meta.ifDoFresh){
      //重置ifDoFresh
      this.$route.meta.ifDoFresh = false;
      //获取列表数据方法第一参数为是否重置搜索条件和页数
      this.$refs.easyRefresh.scrollTo(0,0);
      this.current_page = 1;
      this.getOrderList();
    }else{

    }
  },
  beforeRouteEnter (to, from, next) {
    if(from.name === 'evaluateAdd') {
      to.meta.ifDoFresh = true;
    }
    next();
  }
}

</script>
<style lang='less' scoped>
  @import 'index';
  .child-view{
    height: 100%;
    padding-top: 190px;
  }

</style>
