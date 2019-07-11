<template>
  <div class="evaluate">
    <v-header title="评价详情"></v-header>
    <div class="bg20"></div>

    <div class="evaluate-item">
        <div class="head">
          <img v-if="CommentDetail.user.length>0" :src="CommentDetail.user[0].avatar">
          <p>消费后评价</p>
        </div>
        <div class="content">
          <div class="one">
            <p>{{CommentDetail.user.length?CommentDetail.user[0].nickname:''}}</p><p>{{CommentDetail.time.hotel_room_type_id}}</p>
          </div>
          <div class="score-box">
            <i class="iconfont iconpinglun2"
               v-for="(item,yes_index) in parseInt(CommentDetail.score)"
               :key="'facilities-yes'+yes_index"></i>
            <i class="iconfont iconshoucang_shoucang"
               v-for="(item,no_index) in 5-parseInt(CommentDetail.score)"
               :key="'facilities-no'+no_index"></i>
          </div>
          <div class="time-block">
            <p><span>{{CommentDetail.creatime}}</span>评论</p><p><span></span></p>
          </div>
          <div class="detail">{{CommentDetail.content}}</div>
          <div class="img-box">
            <!--            style="background-image: url('')"-->
            <div class="evaluate-img" v-for="img in CommentDetail.images">
              <van-image
                width="100%"
                height="100%"
                fit="cover"
                :src="commonJs.url+img"
              />
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import header from "@/components/Header/header";
import { Toast } from 'vant'
import {commonJs,toFixedChange}  from '@/commonJs/index.js';
import {myCommentDetail} from '@/api/index'

export default {
  data(){
      return {
        id:'',
        commonJs:commonJs,
        CommentDetail:'',
      }
  },
  computed:{
  },
  components: {
      "v-header": header,
  },
  mounted(){
    this.id = this.$route.query.id;
    myCommentDetail({comment_id:this.id}).then(res=>{
      this.CommentDetail = res.data;
      this.CommentDetail.score = Math.round(parseInt(this.CommentDetail.score));
    })
  },
  methods:{

  }
}

</script>
<style lang='less' scoped>
  @import 'index';
  .child-view{
    padding-top: 100px;
    /*height: 100%;*/
  }
</style>
