<template>
  <div class="hotelorder">
    <v-header title="酒店下单"></v-header>
    <div class="top-bg"></div>
    <div class="room-info">
      <div class="room-name">
        <p>商务大床房</p>
        <p @click="$router.push('/hotelDetail')">房间详情<i class="iconfont iconarrow-right"></i></p>
      </div>
      <p class="address">太原市-小店区学府街体育路口28号</p>
      <div class="date"><span>12月01日-12月02日</span><b></b><span>共1晚</span></div>
      <p class="room-on">大床·不含早·有wifi</p>
      <div class="on-tip"><i class="iconfont iconorder-jinggao"></i>入住前可免费取消</div>
    </div>

    <div class="info-list">
      <div class="info-item van-hairline--bottom" @click="actionRoomShow=true">
        <p class="label">房间数:</p>
        <p class="content">{{actionRoomId}}间</p>
        <i class="iconfont iconarrow-right"></i>
      </div>
      <div class="info-item input-list van-hairline--bottom">
        <div class="input-box">
          <div class="info-item van-hairline--bottom">
            <p class="label">入住人:</p>
            <input type="text" v-model="user.name" placeholder="入住人姓名">
          </div>
          <div class="info-item">
            <p class="label">联系方式:</p>
            <input type="text" v-model="user.phone" placeholder="大陆手机号码，用于接收通知" maxlength="11">
          </div>
        </div>
        <img src="~assets/img/user-icon.png" @click="actionPeopleShow=true">
      </div>
      <div class="info-item van-hairline--bottom" @click="actionTimeShow=true">
        <p class="label">预计到店:</p>
        <p class="content"><span class="time">{{timeList[actionTimeId]}}</span>(整晚保留)</p>
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
        <p class="info" @click="coseShow=!coseShow">明细</p>
        <van-button
          :loading="is_loading"
          type="warning"
          loading-text="提交中"
          @click="order"
        >支付</van-button>
      </div>
    </div>

    <van-action-sheet v-model="actionSheetShow" :title="actionSheetTitle">
      <div class="action-room" v-show="actionRoomShow">
        <p class="item" :class="item===actionRoomId?'active':''" v-for="item in 10" @click="actionRoomId=item">{{item}}间</p>
      </div>
      <div class="action-time" v-show="actionTimeShow">
        <p class="item" :class="index===actionTimeId?'active':''" v-for="(item,index) in timeList" @click="actionTimeId=index">{{item}}</p>
      </div>

      <div class="peopleList" v-show="actionPeopleShow">
        <div class="item"
             v-for="(item,index) in peopleList">
          <div class="left" @click="actionPeopleId=index;">
            <img src="~assets/img/select-yes.png" v-if="item.status">
            <img v-else src="~assets/img/select-no.png">
            <span class="name">{{item.name}}</span>
            <span class="phone">{{item.phone}}</span>
          </div>
          <div class="right">编辑</div>
        </div>
      </div>
    </van-action-sheet>
    <van-action-sheet class="cosePopup"
                      v-model="coseShow"
                      title="费用明细">
      <div class="coseBox">
        <div class="one"><p class="left">在线支付</p><p class="right">￥253</p></div>
        <div class="two"><p class="left">房费</p><p class="right">2晚1间 共 ￥376</p></div>
        <div class="coseList">
          <div class="item"><p class="left"><span>12月01日-12月02日</span>单早</p><p class="right">1X ￥200</p></div>
          <div class="item"><p class="left"><span>12月01日-12月02日</span>单早</p><p class="right">1X ￥200</p></div>
        </div>
      </div>
    </van-action-sheet>

  </div>
</template>

<script>
import header from "@/components/Header/header";
export default {
  name:'hotelorder',
  data(){
      return {
        is_loading:false,
        actionSheetTitle:'',
        actionSheetShow:false,
        actionRoomId:1,
        actionTimeId:1,
        actionPeopleId:'',
        actionRoomShow:false, // 选择房间
        actionTimeShow:false, // 选择时间
        actionPeopleShow:false, // 选择联系人
        timeList:[
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
          '23:00',
          '0点以后',
        ],
        user:{
          name:'',
          phone:''
        },
        peopleList:[
          {
            name:'吴振尧',
            phone:'15110539952',
            status:false,
          },
          {
            name:'吴振',
            phone:'15110539953',
            status:false,
          },
        ],
        coseShow:false,
      }
  },
  watch:{
    'actionPeopleId'(i){
      this.peopleList.forEach((data,index)=>{
        data.status = false;
      })
      this.peopleList[i].status = true;
      this.user = this.peopleList[i];
    },
    'actionSheetShow'(val){
      if(!val){
        this.actionRoomShow = false;
        this.actionTimeShow = false;
        this.actionPeopleShow = false;
      }
    },
    'actionRoomShow'(val){
      this.actionSheetShow = val;
      if(val){
        this.actionSheetTitle = '预定数量';
      }
    },
    'actionTimeShow'(val){
      this.actionSheetShow = val;
      if(val){
        this.actionSheetTitle = '预定时间';
      }
    },
    'actionPeopleShow'(val){
      this.actionSheetShow = val;
      if(val){
        this.actionSheetTitle = '选择入住人';
      }
    }
  },
  components: {
      "v-header": header,
  },
  mounted(){

  },
  methods:{
    order(){
      this.is_loading = true;
      setTimeout(()=>{
        this.is_loading = false;
        this.$router.push('/payOrder');
      },1000);
    }
  }
}

</script>
<style lang='less' scoped>
  @import 'index';

  .child-view{
    padding-top: 100px;
  }
</style>
