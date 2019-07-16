<template>
  <div class="notice-list">
    <EasyRefresh
      ref="easyRefresh"
      :userSelect="false"
      :autoLoad="false"
      :onRefresh="onRefresh"
      :loadMore="loadMore">

      <template v-slot:header>
        <BallPulseHeader :height="140"/>
      </template>

      <div class="notice-item"
           @click="$router.push({path:'/notice/detail',query:{id:item.id}})"
           v-for="(item,index) in noticeList"
           :key="index">
        <i class="iconfont iconhome-gonggao"></i>
        <div class="right">
          <p class="type">活动通知</p>
          <p class="title text-ellipsis">{{item.title}}</p>
          <p class="content text-ellipsis">{{item.content}}</p>
          <div class="bottom">
            <p class="b-left">{{item.createtime.slice(0,10)}}发布</p>
            <p class="b-right">了解详情></p>
          </div>
        </div>
      </div>


    <template v-slot:footer>
      <BallPulseFooter :height="140"/>
    </template>
    </EasyRefresh>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import { Dialog } from 'vant';
import { Toast } from 'vant'
import {commonJs}  from '@/commonJs/index.js';
import {noticeList}  from '@/api/index';

export default {
  data(){
      return {
        noticeList:[],

        last_page:'', // 最后页码
        current_page:1, // 当前第几页
      }
  },
  components: {
      "v-header": header,
  },
  mounted(){
    this.onRefresh();
  },
  methods:{
    onRefresh(done){
      this.current_page = 1;
      noticeList({status:'98',page:this.current_page}).then(res=>{
        done && done();
        this.last_page = res.data.last_page;
        this.noticeList = res.data.data;
      })
    },
    loadMore(done){
      if(this.current_page>this.last_page){
        Toast('没有更多了')
        done(true);
        return;
      }
      noticeList({page:this.current_page}).then(res=>{
        this.last_page = res.data.last_page;
        let dataList = res.data.data;

        this.noticeList = this.noticeList.concat(dataList);
        if(this.current_page<=this.last_page){
          this.current_page += 1;
          done(false);
        }else{
          Toast('没有更多了')
          done(true);
        }
      })
    }
  }
}

</script>
<style lang='less' scoped>
  .notice-list{
    width: 100%;
    height: 100%;
    .notice-item{
      width:670px;
      height:240px;
      background: #fff;
      box-shadow:0 4px 18px 0 rgba(153,153,153,0.27);
      border-radius:20px;
      margin: 30px auto 0;
      display: flex;
      justify-content: space-between;
      padding: 25px 35px;
      font-size: 24px;
      color: #999;
      /*&:active{*/
      /*  background: #f2f3f5;*/
      /*}*/
      .iconfont{
        display: inline-block;
        border-radius: 50%;
        background: #f00;
        width: 42px;
        height: 42px;
        line-height: 42px;
        &:before{
          font-size: 22px;
          color: #fff;
        }
      }
      .right{
        text-align: left;
        width: 546px;
        .type{
          line-height: 42px;
        }
        .title{
          margin-top: 20px;
          font-size: 30px;
          color: #333;
        }
        .content{
          margin-bottom: 20px;
          font-size: 24px;
          color: #333;
        }
        .bottom{
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          line-height: 40px;
          .b-left{

          }
          .b-right{
            font-size: 24px;
            color: #f00;
          }
        }
      }
    }
  }
</style>
