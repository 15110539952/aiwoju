<template>
  <div class="me-home">
    <div class="banner">
<!--      <i class="iconfont iconsetting" @click="$router.push('/setting')"></i>-->
      <div class="head-bg">
        <div class="head">
          <van-image
            width="100%"
            height="100%"
            fit="cover"
            :src="modify.avatar"
            />
        </div>
        <p class="head-bm">{{modify.gender===2?'Female':'Gentleman'}}</p>
      </div>
      <p class="username">{{info.name}}</p>
<!--      <div class="me-type">-->
<!--        <div class="item"><span>{{info.score || 0}}</span><p>我的积分</p></div>-->
<!--        <div class="item" @click="$router.push('/myevaluate')"><span>{{info.comment}}</span><p>我的评价</p></div>-->
<!--        <div class="item" @click="$router.push('/contacts/home')"><span>{{info.contact}}</span><p>联系人</p></div>-->
<!--        <div class="item"><span>-</span><p>优惠券</p></div>-->
<!--      </div>-->
      <div class="banner-bg-bottom"></div>
    </div>
    <div class="item-box">
      <div class="item" @click="$router.push({path:'/mycoupon',query:{id:1}})">
        <p class="icon"><i class="iconfont iconyouhuiquan1"></i></p>
        <p class="name">我的卡券</p>
      </div>
      <div class="item" @click="$router.push('/myevaluate')">
        <p class="icon"><i class="iconfont iconwodepingjia"></i></p>
        <p class="name">我的评价</p>
      </div>
      <div class="item" @click="$router.push({path:'/mycoupon',query:{id:0}})">
        <p class="icon"><i class="iconfont iconcoupon"></i></p>
        <p class="name">领券中心</p>
      </div>
      <div class="item" @click="$router.push('/contacts/home')">
        <p class="icon"><i class="iconfont iconlianxiren2"></i></p>
        <p class="name">联系人</p>
      </div>
      <div class="item" @click="seeScore">
        <p class="icon"><i class="iconfont iconziyuan"></i></p>
        <p class="name">我的积分</p>
      </div>
      <div class="item" @click="$router.push('/setting/user')">
        <p class="icon"><i class="iconfont iconsetup_icon"></i></p>
        <p class="name">设置</p>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import footer from "@/components/Footer";
import { Toast,Dialog } from 'vant'
import {commonUrl}  from '@/commonJs/index.js'
import {user,modify,registerAgent} from '@/api/index'

export default {
  data(){
      return {
        url:commonUrl.url,
        info:'',
        modify:'',
      }
  },
  components: {
      "v-header": header,
      "v-footer": footer,
  },
  mounted(){
    user().then(res=> {
      this.info = res.data;
    });
    modify().then(res=> {
      this.modify = res.data;
    });

  },
  methods:{
    registerAgent(){
      registerAgent().then(res=>{
        Toast(res.msg);
        this.info.is_agent = 1;
      });
    },
    seeScore(){
      Dialog.alert({
        title: `您已有积分：${this.info.score}`,
        message: '积分兑换功能正在开发中，敬请期待哦！！！'
      }).then(() => {
        // on close
      });
    }
  }
}

</script>
<style lang='less' scoped>
  @import 'index';
  .child-view{
    padding-bottom: 100px;
  }
</style>
<style>
  .van-dialog__message{
    font-size: 26px !important;
  }
</style>
