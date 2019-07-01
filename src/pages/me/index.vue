<template>
  <div>
    <div class="banner">
      <i class="iconfont iconsetting" @click="$router.push('/setting')"></i>
      <div class="head-bg">
        <div class="head">
          <van-image
            width="100%"
            height="100%"
            fit="cover"
            :src="require('assets/img/dear.png')"
            />
        </div>
        <p class="head-bm">Handsome</p>
      </div>
      <p class="username">星旅者XT01</p>
      <div class="me-type">
        <div class="item"><span>0</span><p>我的积分</p></div>
        <div class="item" @click="$router.push('/myevaluate')"><span>0</span><p>我的评价</p></div>
        <div class="item" @click="$router.push('/contacts/home')"><span>0</span><p>联系人</p></div>
        <div class="item"><span>-</span><p>优惠券</p></div>
      </div>
      <div class="banner-bg-bottom"></div>
    </div>
    <div class="hotel-broker">
      <p class="title" @click="$router.push('/mehotel/home')">酒店经纪人 <i class="iconfont iconarrow-right"></i></p>
      <div class="qrcode">
        <img src="~assets/img/dear.png" alt="">
        <p>我的推广二维码</p>
      </div>
      <div class="broker-type">
        <div class="item"><span>0</span><p>当前佣金</p></div>
        <div class="item"><span>0</span><p>已提取</p></div>
        <div class="item"><span>0</span><p>可提取</p></div>
      </div>
      <van-button type="primary" size="large" @click="">注册成为酒店经纪人</van-button>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import footer from "@/components/Footer";
export default {
    data(){
        return {

        }
    },
    components: {
        "v-header": header,
        "v-footer": footer,
    }
}

</script>
<style lang='less' scoped>
  @import 'index';
  .child-view{
    padding-bottom: 100px;
  }
</style>
