<template>
  <div>
<!--      <v-header title="solr测试"></v-header>-->
    <div class="banner">
      <van-swipe :autoplay="5000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in images" :key="index">
          <van-image
            width="100%"
            height="100%"
            fit="cover"
            :src="item"
          />
<!--          <img class="banner-img" :src="item">-->
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="hotel-name">山西爱蜗居青年创客公寓</div>
    <div class="hotel-select-block">
      <div class="date-select van-hairline--top" @click="showCalendar = true;nowDate = new Date()">
        <img src="~assets/img/date-time.png" alt="">
        <div class="content">
          <p class="font55">01</p>
          <p class="column">
            <span><span class="font24">02</span><span class="font20">月</span></span>
            <span class="font24">周一</span>
          </p>
          <p>入住</p>
          <p>—</p>
          <p>离店</p>
          <p class="font55">01</p>
          <p class="column">
            <span><span class="font24">02</span><span class="font20">月</span></span>
            <span class="font24">周一</span>
          </p>
          <p><span class="font36">1</span><span class="font24">晚</span></p>
        </div>
        <img src="~assets/img/arrow-right.png" alt="">
      </div>
      <div class="hour-home van-hairline--top"
           @click="is_hour_home=!is_hour_home">
        <img :src="is_hour_home?require('assets/img/select-yes.png'):require('assets/img/select-no.png')" alt="">
        <span>钟点房</span>
      </div>
      <div class="btn-block van-hairline--top">
        <van-button type="primary" size="large" @click="go()">订房间</van-button>
      </div>
    </div>
    <div class="notice-tip">
      <img src="~assets/img/notice.png">
      <span>伙伴们，6月1日至6月7日限量名额半价优惠，速来抢住！！</span>
    </div>
    <div class="integral">
      <div class="left">
        <span class="big">每日积分</span>
        <span class="small">累计255分</span>
      </div>
      <div class="content">
        <div class="side">
          <p class="integral-bg"><span>+</span><span>5</span></p>
          <p class="bottom">第五天</p>
        </div>
        <div class="two">
          <p class="integral-bg"><span>+</span><span>5</span></p>
          <p class="bottom">第五天</p>
          <p class="get">点击领取</p>
        </div>
        <div class="side">
          <p class="integral-bg"><span>+</span><span>5</span></p>
          <p class="bottom">第五天</p>
        </div>
      </div>
      <div class="right">每七日一轮</div>
    </div>
    <v-footer></v-footer>
    <van-popup v-model="showCalendar" position="right" style="height:100%;width:100%;">
      <calender
        :date="nowDate"
        :monthNumber="4"
        @closeProp="showCalendar=false"
        v-on:asureEvent="asureClick"
        :onlyOne="roomType === 1 ? false : true"
        :isShowDatePicker="isShowDatePicker"
      ></calender>
<!--      <inlineCalendar />-->
    </van-popup>
    <div></div>
<!--    <v-article></v-article>-->
  </div>
</template>

<script>
import article from "@/components/Article/article";
import footer from "@/components/Footer";
import Calender from '@/components/Calender/calender.vue'

var moment = require('moment');
// console.log(moment().format('l'));
// console.log(moment().date());
// console.log(moment().toArray());
// console.log(moment().format('YYYY-MM-DD'));

export default {
    data(){
        return {
          images: [
            'https://img.yzcdn.cn/2.jpg',
            'https://img.yzcdn.cn/2.jpg',
            'https://img.yzcdn.cn/2.jpg'
          ],
          dateTime:require('assets/img/date-time.png'),
          is_hour_home: false, // 钟点房选择
          showCalendar: false, // 是否现实日期选择
          nowDate: new Date(),
          roomType:1,
          isShowDatePicker:true,
        }
    },
    components: {
        "v-footer": footer,
        "v-article":article,
        "Calender":Calender
    },
    methods:{

      asureClick (chooseDate) {
        console.log(chooseDate)
        this.showCalendar = false;
        // this.IS_SHOW_DATE_PICKER(false)
        // this.CHECK_IN_OUT_INFO({
        //   checkinDate: chooseDate.startDate.format,
        //   checkoutDate: chooseDate.endDate.format
        // })
      },
      go(){
        this.$router.push({ path: '/hotel' });
      }
    }
}

</script>
<style lang='less' scoped>
  @import "index";
</style>
