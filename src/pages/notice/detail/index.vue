<template>
  <div class="notice-detail" v-if="noticeDetail">
    <div class="title text-ellipsis">{{noticeDetail.title}}</div>
    <div class="content">
      <p class="label">活动简介：</p>
      <div class="detail" v-html="noticeDetail.content"></div>
      <div class="bottom">{{noticeDetail.createtime.slice(0,10)}} 发布</div>
    </div>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import { Dialog } from 'vant';
import { Toast } from 'vant'
import {commonJs}  from '@/commonJs/index.js';
import {noticeDetail}  from '@/api/index';

export default {
  data(){
      return {
        id:'',
        noticeDetail:'',
      }
  },
  components: {
      "v-header": header,
  },
  mounted(){
    this.id = this.$route.query.id || '';
    noticeDetail({id:this.id}).then(res=>{
      this.noticeDetail = res.data;
    })
  },
  methods:{

  }
}

</script>
<style lang='less' scoped>
  .notice-detail{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 100px;
    .title{
      background: #F8F8F8;
      font-size: 30px;
      color: #333333;
      line-height: 100px;
      padding: 0 35px;
      height: 100px;
      text-align: left;
    }
    .content{
      padding: 40px 45px 80px 35px;
      text-align: left;
      .label{
        color: #999;
        font-size: 24px;
      }
      .detail{
        width: 100%;
        color: #333;
        font-size: 24px;
      }
    }

    .bottom{
      float: right;
      display: inline-block;
      padding-top: 30px;
      border-top: 1px solid #999999;
      font-size: 24px;
      color: #333;
      text-align: right;
      margin-top: 80px;
    }
  }
</style>
