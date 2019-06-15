<template>
  <div>
    <v-header title="酒店"></v-header>
    <div class="banner">
      <van-swipe :autoplay="5000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in images" :key="index">
          <van-image
            width="100%"
            height="100%"
            fit="cover"
            :src="item"/>
        </van-swipe-item>
      </van-swipe>
      <div class="scope-block">
        <p class="one">2018年装修</p>
        <p class="two"><span>4.0</span>分</p>
        <p class="three">
          <img src="~assets/img/star-yes.png"
               v-for="(item,index) in score"
               :key="index">
          <img src="~assets/img/star-no.png"
               v-for="(item,index) in 5-score"
               :key="index">
        </p>
      </div>
    </div>

    <div class="address-block">
      <div class="left">
        <div class="name-block">
          <p class="name text-ellipsis">太原市-小店区学府街体育路口28号</p>
          <p class="label">(豪华五星)</p>
        </div>
        <p class="apart">与我相距2km</p>
      </div>
      <div class="right"><img src="~assets/img/address.png"></div>
    </div>

    <div class="date-block">
      <div class="start">
        <p class="text1">入住时间</p>
        <div class="date">
          <span class="date-num">01</span>
          <span class="text-riyue">日</span>
          <span class="date-num">01</span>
          <span class="text-riyue">月</span>
        </div>
        <p>今日</p>
      </div>
      <div class="num-date">
        <p>1晚<b class="left"></b><b class="right"></b></p>
      </div>
      <div class="end">
        <p class="text1">离店时间</p>
        <div class="date">
          <span class="date-num">01</span>
          <span class="text-riyue">日</span>
          <span class="date-num">01</span>
          <span class="text-riyue">月</span>
        </div>
        <p>明日</p>
      </div>
    </div>

    <div class="room-list">
      <div class="room-item">
        <div class="room-info">
          <div style="" class="img"></div>
          <div class="info">
            <p class="one"><span class="name">商务大床房</span><span class="label">（1小时确认）</span></p>
            <p class="two">还剩10间</p>
            <p class="three"><span>19㎡<i></i></span><span>1.8X2m大床<i></i></span><span>1.8X2m大床</span></p>
          </div>
        </div>
        <div class="price-item van-hairline--top">
          <div class="type"><p>无早</p><p>限时取消</p></div>
          <div class="price">
            <p>￥<span>466</span></p>
            <p>当前星享卡可代扣100元</p>
          </div>
          <div class="fix">
            <van-button type="primary" size="large" @click="go()">在线预定</van-button>
          </div>
        </div>
        <div class="price-item van-hairline--top">
          <div class="type"><p>含单早</p><p>限时取消</p></div>
          <div class="price">
            <p>￥<span>466</span></p>
            <p>当前星享卡可代扣100元</p>
          </div>
          <div class="fix">
            <van-button type="primary" size="large" @click="go()">在线预定</van-button>
          </div>
        </div>
      </div>
      <div class="room-item van-hairline--top">
        <div class="room-info">
          <div style="" class="img"></div>
          <div class="info">
            <p class="one"><span class="name">商务大床房</span><span class="label">（1小时确认）</span></p>
            <p class="two">还剩10间</p>
            <p class="three"><span>19㎡<i></i></span><span>1.8X2m大床<i></i></span><span>1.8X2m大床</span></p>
          </div>
        </div>
        <div class="price-item van-hairline--top">
          <div class="type"><p>含单早</p><p>限时取消</p></div>
          <div class="price">
            <p>￥<span>466</span></p>
            <p>当前星享卡可代扣100元</p>
          </div>
          <div class="fix">
            <van-button type="primary" size="large" @click="go()">在线预定</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="room-list">
      <div class="room-item">
        <div class="room-info van-hairline--bottom">
          <div style="" class="img"></div>
          <div class="info">
            <p class="one"><span class="name">钟点房</span><span class="label">（30分钟确认）</span></p>
            <p class="two">还剩10间</p>
            <p class="three"><span>19㎡<i></i></span><span>1.8X2m大床<i></i></span><span>1.8X2m大床</span></p>
          </div>
        </div>
        <div class="price-item van-hairline--top">
          <div class="type"><p>4小时</p><p>限时取消</p></div>
          <div class="price">
            <p>￥<span>123</span></p>
            <p>当前星享卡可代扣100元</p>
          </div>
          <div class="fix">
            <van-button type="primary" size="large" @click="go()">在线预定</van-button>
          </div>
        </div>
        <div class="price-item van-hairline--top">
          <div class="type"><p>8小时</p><p>限时取消</p></div>
          <div class="price">
            <p>￥<span>323</span></p>
            <p>当前星享卡可代扣100元</p>
          </div>
          <div class="fix">
            <van-button type="primary" size="large" @click="go()">在线预定</van-button>
          </div>
        </div>
      </div>
    </div>

    <div class="rule-box">
      <p class="title-one">订房必读</p>
    </div>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import banner from "@/components/Banner/banner";
import article from "@/components/Article/article";
import footer from "@/components/Footer";
export default {
    data(){
        return {
          images: [
            'https://img.yzcdn.cn/2.jpg',
            'https://img.yzcdn.cn/2.jpg',
            'https://img.yzcdn.cn/2.jpg'
          ],
          score:4,
        }
    },
    components: {
        "v-header": header,
        "v-banner": banner,
        "v-footer": footer,
        "v-article":article
    }
}

</script>
<style lang='less' scoped>
  @import "index";
  .textfont{
    width: 200px;
    height: 200px;
    margin: 0 auto;
    background: gray;
    font-size: 30px;
  }
  .textfont1{
    width: 200PX;
    height: 200PX;
    margin: 0 auto;
    background: gray;
    font-size: 30px; /*no*/
  }
</style>
