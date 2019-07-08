<template>
  <div class="evaluate">
    <v-header title="评价"></v-header>
    <div class="fixed-top">
      <div class="evaluate-top">
        <div class="left">
          <p class="score"><span class="num">{{hotelComment.hotel_score}}</span><span class="text">分</span><span>{{hotelComment.hotel_ti}}</span></p>
          <p class="eva-num">当前共有{{hotelComment.comment_num}}条评论</p>
        </div>
        <div class="right">
          <div class="room-info"><p class="label">设施配套</p><p class="score">{{hotelComment.score_facilities}}.0分</p></div>
          <div class="room-info"><p class="label">卫生状况</p><p class="score">{{hotelComment.score_sanitation}}.0分</p></div>
          <div class="room-info"><p class="label">服务态度</p><p class="score">{{hotelComment.score_service}}.0分</p></div>
          <div class="room-info"><p class="label">地理位置</p><p class="score">{{hotelComment.score_location}}.0分</p></div>
        </div>
      </div>
      <p class="bg20"></p>
      <div class="evaluate-tab van-hairline--bottom">
        <p class="tab" @click="tabChange(0)" :class="tabIndex===0?'active':''">全部</p>
        <p class="tab" @click="tabChange(1)" :class="tabIndex===1?'active':''">有图({{hotelComment.comment_img_num}})</p>
        <p class="tab" @click="tabChange(2)" :class="tabIndex===2?'active':''">差评({{hotelComment.comment_stat_num}})</p>
      </div>
    </div>

    <div class="evaluate-list" v-if="evaluateList">
      <EasyRefresh
        :userSelect="false"
        :loadMore="loadMore">

      <div class="evaluate-item"
           :key="'eva_'+index"
           v-for="(item,index) in evaluateList">
        <div class="head">
          <img v-if="item.user_id.length>0" :src="item.user_id[0].avatar">
        </div>
        <div class="content">
          <div class="one">
            <p>{{item.user_id.length?item.user_id[0].nickname:''}}</p><p>{{item.room_type_id}}</p>
          </div>
          <div class="score-box">
            <i class="iconfont iconpinglun2"
               v-for="(item,yes_index) in parseInt(item.score)"
               :key="'facilities-yes'+yes_index"></i>
            <i class="iconfont iconshoucang_shoucang"
               v-for="(item,no_index) in 5-parseInt(item.score)"
               :key="'facilities-no'+no_index"></i>
          </div>
          <div class="time-block">
            <p><span>{{item.start_time}}</span>入住</p><p><span>{{item.creatime}}</span>  发表</p>
          </div>
          <div class="detail">{{item.content}}</div>
          <div class="img-box">
            <!--            style="background-image: url('')"-->
            <div class="evaluate-img" v-for="i in 5">
              <van-image
                width="100%"
                height="100%"
                fit="cover"
                :src="require('assets/img/dear.png')"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="no-list" v-if="!evaluateList.length">
        <img src="~assets/img/evaluate-no-list.png">
        <p>暂无评论</p>
        <p>这么好的酒店，么人“到此一游”吗？</p>
      </div>

<!--        <template v-slot:footer>-->
<!--          <MaterialFooter/>-->
<!--        </template>-->
      <template v-slot:footer>
<!--        <ClassicsFooter/>-->
<!--        <EmptyFooter/>-->
<!--        <BezierBounceFooter/>-->
        <BallPulseFooter/>
<!--        <p style="font-size: 30px;height: 80px;color: #333;">加载更多</p>-->
      </template>
      </EasyRefresh>
    </div>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import { Toast } from 'vant'
import {commonJs}  from '@/commonJs/index.js';
import {hotelComment} from '@/api/index'

export default {
  data(){
      return {
        commonJs:commonJs,
        tabIndex: 0,
        hotelComment:'',
        comment:[],
        comment_img:[],
        comment_stat:[],
        evaluateList:null,
      }
  },
  computed:{
  },
  components: {
      "v-header": header,
  },
  mounted(){
    hotelComment().then(res=>{
      this.hotelComment = res.data;
      this.comment = res.data.comment;
      this.comment_img = res.data.comment_img;
      this.comment_stat = res.data.comment_stat;
      this.evaluateList = res.data.comment;
      this.hotelComment.hotel_score = this.hotelComment.hotel_score.toFixed(1);
    })
  },
  methods:{
    tabChange(index){
      this.tabIndex = index;
      if(index === 0){
        this.evaluateList = this.comment;
      }
      if(index === 1){
        this.evaluateList = this.comment_img;
      }
      if(index === 2){
        this.evaluateList = this.comment_stat;
      }
      document.documentElement.scrollTop = 0;
    },
    onRefresh(done) {
      setTimeout(() => {
        done()
      }, 1000)
    },
    loadMore(done){
      setTimeout(() => {
        // if (this.itemCount >= 40) {
        //   done(true)
        // } else {
        //   this.itemCount += 10
          done(false)
        // }
      }, 1000)
    }
  }
}

</script>
<style lang='less' scoped>
  @import 'index';
  .child-view{
    height: 100%;
  }
</style>
