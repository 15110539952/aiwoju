<template>
  <div class="evaluate">
    <v-header title="评价"></v-header>
    <div class="fixed-top">
      <div class="evaluate-top">
        <div class="left">
          <p class="score"><span class="num">5.0</span><span class="text">分</span><span>很棒</span></p>
          <p class="eva-num">当前共有5条评论</p>
        </div>
        <div class="right">
          <div class="room-info"><p class="label">设施配套</p><p class="score">5.0分</p></div>
          <div class="room-info"><p class="label">卫生状况</p><p class="score">5.0分</p></div>
          <div class="room-info"><p class="label">服务态度</p><p class="score">5.0分</p></div>
          <div class="room-info"><p class="label">地理位置</p><p class="score">5.0分</p></div>
        </div>
      </div>
      <p class="bg20"></p>
      <div class="evaluate-tab van-hairline--bottom">
        <p class="tab" @click="tabChange(0)" :class="tabIndex===0?'active':''">全部</p>
        <p class="tab" @click="tabChange(1)" :class="tabIndex===1?'active':''">有图(2)</p>
        <p class="tab" @click="tabChange(2)" :class="tabIndex===2?'active':''">差评(0)</p>
      </div>
    </div>

    <div class="evaluate-list">
      <div class="evaluate-item"
           :key="'eva_'+index"
           v-for="(item,index) in evaluateList">
        <div class="head"></div>
        <div class="content">
          <div class="one">
            <p>米斯热的迷失</p><p>商务大床房</p>
          </div>
          <div class="score-box">
            <i class="iconfont iconpinglun2"
               v-for="(item,index) in item.score"
               :key="'facilities-yes'+index"></i>
            <i class="iconfont iconshoucang_shoucang"
               v-for="(item,index) in 5-item.score"
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
      <div class="no-list" v-if="!evaluateList.length">
        <img src="~assets/img/evaluate-no-list.png">
        <p>暂无评论</p>
        <p>这么好的酒店，么人“到此一游”吗？</p>
      </div>
    </div>
  </div>
</template>

<script>
import header from "@/components/Header/header";
export default {
  data(){
      return {
        tabIndex: 0,
        evaluateList:[
          {
            score:5,
          },
          {
            score:3,
          },
          {
            score:4,
          },
        ],
      }
  },
  computed:{
  },
  components: {
      "v-header": header,
  },
  mounted(){

  },
  methods:{
    tabChange(index){
     this.tabIndex = index;
    }
  }
}

</script>
<style lang='less' scoped>
  @import 'index';
  /*.child-view{*/
  /*  padding-top: 440px;*/
  /*}*/
</style>
