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
          <i class="iconfont iconpinglun2"
             v-for="(item,index) in score"
             :key="'facilities-yes'+index"></i>
          <i class="iconfont iconpinglun2 white"
             v-for="(item,index) in 5-score"
             :key="'facilities-no'+index"></i>
<!--          <img src="~assets/img/star-yes.png"-->
<!--               v-for="(item,index) in score"-->
<!--               :key="'yes-'+index">-->
<!--          <img src="~assets/img/star-no.png"-->
<!--               v-for="(item,index) in 5-score"-->
<!--               :key="'no-'+index">-->
        </p>
      </div>
    </div>

    <div class="address-block" @click="$router.push('/map')">
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
          <div class="type">
            <p class="top">含单早</p>
            <p class="bottom">限时取消</p>
          </div>
          <div class="price">
            <p class="top">￥<span>466</span></p>
            <p class="bottom">当前星享卡可代扣100元</p>
          </div>
          <div class="fix">
            <van-button type="primary" size="large" @click="order()">在线预定</van-button>
          </div>
        </div>
        <div class="price-item van-hairline--top">
          <div class="type">
            <p class="top">含单早</p>
            <p class="bottom">限时取消</p>
          </div>
          <div class="price">
            <p class="top">￥<span>466</span></p>
            <p class="bottom">当前星享卡可代扣100元</p>
          </div>
          <div class="fix">
            <van-button type="primary" size="large" @click="order()">在线预定</van-button>
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
          <div class="type">
            <p class="top">含单早</p>
            <p class="bottom">限时取消</p>
          </div>
          <div class="price">
            <p class="top">￥<span>466</span></p>
            <p class="bottom">当前星享卡可代扣100元</p>
          </div>
          <div class="fix">
            <van-button type="primary" size="large" @click="order()">在线预定</van-button>
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
          <div class="type">
            <p class="top">含单早</p>
            <p class="bottom">限时取消</p>
          </div>
          <div class="price">
            <p class="top">￥<span>466</span></p>
            <p class="bottom">当前星享卡可代扣100元</p>
          </div>
          <div class="fix">
            <van-button type="primary" size="large" @click="order()">在线预定</van-button>
          </div>
        </div>
        <div class="price-item van-hairline--top">
          <div class="type">
            <p class="top">含单早</p>
            <p class="bottom">限时取消</p>
          </div>
          <div class="price">
            <p class="top">￥<span>466</span></p>
            <p class="bottom">当前星享卡可代扣100元</p>
          </div>
          <div class="fix">
            <van-button type="primary" size="large" @click="order()">在线预定</van-button>
          </div>
        </div>
      </div>
    </div>

    <div class="rule-box">
      <p class="title-one">订房必读</p>
      <div class="rule-item">
        <p class="rule-title">入离时间</p>
        <p class="rule-content">
          <span class="left">入店时间<span>12:00</span>以后</span>
          <span class="right">离店时间<span>12:00</span>之前</span>
        </p>
      </div>
      <div class="rule-item">
        <p class="rule-title">宠物携带</p>
        <p class="rule-content">不可携带宠物</p>
      </div>
      <div class="rule-item">
        <p class="rule-title">退订政策</p>
        <p class="rule-content">部分限时退订</p>
      </div>
    </div>
<!--    配套设施-->
    <div class="facilities">
      <div class="title-one">配套设施<p class="title-right" @click="$router.push('/hotelDetail')">设施详情 <i class="iconfont iconarrow-right"></i></p></div>
      <div class="rule-item">
        <p class="rule-title">2018年开业</p>
        <div class="rule-content">
          <p><img src="~assets/img/wifi.png"> 无限上网</p>
          <p><img src="~assets/img/stop-car.png"> 停车场</p>
          <p><img src="~assets/img/hot-water.png"> 24小时热水</p>
        </div>
      </div>
    </div>
<!--    房间评价-->
    <div class="facilities">
      <div class="title-one">
        房间评价<p class="title-right" @click="$router.push('/evaluateList')">更多评价 <i class="iconfont iconarrow-right"></i></p>
      </div>
      <div class="facilities-score van-hairline--bottom">
        <div class="left"><span>4.0</span>分</div>
        <div class="right">
          <p>2154条评价</p>
          <p>
            <i class="iconfont iconpinglun2"
               v-for="(item,index) in score"
               :key="'facilities-yes'+index"></i>
            <i class="iconfont iconshoucang_shoucang"
               v-for="(item,index) in 5-score"
               :key="'facilities-no'+index"></i>
          </p>
        </div>
      </div>
      <div class="evaluate-item">
        <div class="head"></div>
        <div class="content">
          <div class="one">
            <p>米斯热的迷失</p><p>商务大床房</p>
          </div>
          <div class="score-box">
            <i class="iconfont iconpinglun2"
               v-for="(item,index) in score"
               :key="'facilities-yes'+index"></i>
            <i class="iconfont iconshoucang_shoucang"
               v-for="(item,index) in 5-score"
               :key="'facilities-no'+index"></i>
          </div>
          <div class="time-block">
            <p><span>2018.10.12</span>入住</p><p><span>2018.10.13</span>  发表</p>
          </div>
          <div class="detail">房间挺好挺舒适，下回还来！</div>
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
    </div>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import banner from "@/components/Banner/banner";
import article from "@/components/Article/article";
import footer from "@/components/Footer";
export default {
  name:'hotel',
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
  },
  methods:{
    order(){
      this.$router.push('/hotelorder');
    }
  }
}

</script>
<style lang='less' scoped>
  @import "index";
  .child-view{
    padding-top: 100px;
  }
</style>
