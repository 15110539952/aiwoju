<template>
  <div class="hotel-detail">
    <v-header title="酒店详情"></v-header>
    <div class="tab-box">
      <p @click="goAnchor('oneId',0)" :class="tabId===0?'active':''" class="tab-title">设施详情 <b></b></p>
      <p @click="goAnchor('twoId',1)" :class="tabId===1?'active':''" class="tab-title">酒店介绍 <b></b></p>
      <p @click="$router.push({path:'/map',query:{lng:hotel_infor.lng,lat:hotel_infor.lat,name:hotel_infor.name,address:hotel_infor.address}})"
         :class="tabId===2?'active':''"
         class="tab-title">交通信息 <b></b></p>
    </div>
    <div class="content">
      <div class="list-box oneId" v-if="peitao">
        <p class="title">{{peitao.name}}</p>
        <div class="item" v-for="(item,index) in peitao.erji" :key="'erji'+index">
          <p class="item-title">
            <img class="labe_icon" :src="commonJs.url+item.image">
<!--            <i class="iconfont iconpeizhi_wangluo"></i>-->
            {{item.name}}
          </p>
          <div class="type-list">
            <div class="label" v-for="(itemLabel,label_index) in item.sanji" :key="'label_'+label_index">{{itemLabel.name}}</div>
          </div>
        </div>
      </div>
      <div class="list-box">
        <p class="title">订房必读</p>
        <div class="hotel_description" style="" v-html="description"></div>
      </div>
      <div class="list-box twoId">
        <p class="title">酒店详情</p>
        <div class="room-type">
          <p><span>装修时间：</span>{{hotel_infor.renovate_time}}年</p>
          <p><span>开业时间：</span>{{hotel_infor.opeen_time}}年</p>
          <p><span>楼层高度：</span>{{hotel_infor.floor_num}}</p>
          <p><span>房间数：</span>{{hotel_infor.room_num}}</p>
        </div>
<!--        <div class="hotel_description" v-html="hotel_infor.remark"></div>-->
        <div class="room-content">{{hotel_infor.introduce}}</div>
      </div>
      <div class="list-box">
        <p class="title">交通信息</p>
        <div class="hotel_description" style="" v-html="traffic"></div>
      </div>
    </div>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import { Toast } from 'vant'
import {commonJs}  from '@/commonJs/index.js';
import {hotelDetail} from '@/api/index'

export default {
  data(){
      return {
        commonJs:commonJs,
        tabId:0,
        peitao:'',
        hotel_infor:'',
        traffic:'',
        description:'',
      }
  },
  components: {
      "v-header": header,
  },
  mounted(){
    hotelDetail().then(res=>{
      this.peitao = res.data.peitao;
      this.hotel_infor = res.data.hotel_infor[0];
      // Toast.loading();
      // setTimeout(()=>{
        this.traffic = this.hotel_infor.traffic;
        this.description = this.hotel_infor.description;
      //   Toast.clear();
      // },1000);
    })
  },
  methods:{
    goAnchor(selector, index) {
      this.tabId = index;
      if(index === 2){
        this.$router.push('/map');
      }
      if(selector){
        console.log(selector);
        // console.log(document.querySelector("."+selector).offsetTop);
        let top = document.querySelector("."+selector).offsetTop-26;
        document.querySelector('.hotel-detail').scrollTop = top;
      }
    }
  }
}

</script>
<style lang='less' scoped>
  @import 'index';
  .child-view{
    padding-top: 100px;
    overflow: auto;
  }
</style>
