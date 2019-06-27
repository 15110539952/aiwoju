<template>
  <div class="evaluate-add">
    <v-header title="评价"></v-header>
    <div class="room-info">
      <div class="room">
        <p class="name">商务大床房</p>
        <p class="to-detail">
          房间详情<i class="iconfont iconarrow-right"></i>
        </p>
      </div>
      <p class="date">12月01日-12月02日 <span>|</span> 共1晚</p>
      <p class="info">大床·不含早·有wifi</p>
      <p class="price">￥<span>456</span></p>
    </div>
    <p class="pingfen">评分</p>
    <div class="room-score"><span>4.0</span>分</div>
    <div class="set-score van-hairline--top">
      <div class=""></div>
    </div>
    <p class="bg20"></p>

    <router-view/>
  </div>
</template>

<script>
import header from "@/components/Header/header";
export default {
  data(){
      return {

      }
  },
  computed:{
  },
  components: {
      "v-header": header,
  },
  mounted(){
  }
}

</script>
<style lang='less' scoped>
  @import 'index';
  .child-view{
    padding-top: 100px;
  }
</style>
