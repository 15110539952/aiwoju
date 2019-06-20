<template>
  <div class="hotel-detail">
    <v-header title="酒店详情"></v-header>
    <div class="tab-box">
      <p @click="goAnchor('oneId',0)" :class="tabId===0?'active':''" class="tab-title">设施详情 <b></b></p>
      <p @click="goAnchor('twoId',1)" :class="tabId===1?'active':''" class="tab-title">酒店介绍 <b></b></p>
      <p @click="goAnchor('',2)" :class="tabId===2?'active':''" class="tab-title">交通信息 <b></b></p>
    </div>
    <div class="content">
      <div class="list-box oneId">
        <p class="title">设施服务</p>
        <div class="item">
          <p class="item-title"><i class="iconfont iconpeizhi_wangluo"></i>网络</p>
          <div class="type-list">
            <div class="label">免费WIFI</div>
            <div class="label">美容美发</div>
            <div class="label">免费WIFI</div>
          </div>
        </div>
        <div class="item">
          <p class="item-title"><i class="iconfont iconpeizhi_wangluo"></i>网络</p>
          <div class="type-list">
            <div class="label">免费WIFI</div>
            <div class="label">美容美发</div>
            <div class="label">室内游泳池</div>
            <div class="label">24小时前台服务</div>
            <div class="label">西式餐厅</div>
          </div>
        </div>
        <div class="item">
          <p class="item-title"><i class="iconfont iconpeizhi_wangluo"></i>网络</p>
          <div class="type-list">
            <div class="label">免费WIFI</div>
            <div class="label">美容美发</div>
            <div class="label">免费WIFI</div>
            <div class="label">室内游泳池</div>
            <div class="label">24小时前台服务</div>
            <div class="label">西式餐厅</div>
          </div>
        </div>
        <div class="item">
          <p class="item-title"><i class="iconfont iconpeizhi_wangluo"></i>网络</p>
          <div class="type-list">
            <div class="label">免费WIFI</div>
            <div class="label">美容美发</div>
            <div class="label">免费WIFI</div>
            <div class="label">室内游泳池</div>
            <div class="label">24小时前台服务</div>
            <div class="label">24小时前台服务</div>
            <div class="label">西式餐厅</div>
          </div>
        </div>
      </div>
      <div class="list-box guize">
        <p class="title">订房必读</p>
        <div class="item">
          <p class="item-title">入离时间</p>
          <div class="type-list">不接受儿童预订</div>
        </div>
        <div class="item">
          <p class="item-title">儿童政策</p>
          <div class="type-list">不接受儿童预订</div>
        </div>
        <div class="item">
          <p class="item-title">宠物政策</p>
          <div class="type-list">不允许携带宠物</div>
        </div>
      </div>
      <div class="list-box twoId">
        <p class="title">酒店详情</p>
        <div class="room-type">
          <p><span>装修时间：</span>2018年</p>
          <p><span>开业时间：</span>2018年</p>
          <p><span>楼层高度：</span>33</p>
          <p><span>楼层高度：</span>2033</p>
        </div>
        <div class="room-content">铂涛集团位居全国酒店业前列,旗下近20个品牌,超1亿会员,门店总数超5000家.铂涛集团 诚邀您加盟实现合作共赢铂涛集团位居全国酒店业前列,旗下近20个品牌,超1亿会员</div>
      </div>
      <div class="list-box">
        <p class="title">交通信息</p>
        <div class="road-item">
          <p class="road-title">王府井地铁站</p>
          <p class="road-detail">相距124米，步行约12分钟</p>
        </div>
        <div class="road-item">
          <p class="road-title">王府井地铁站</p>
          <p class="road-detail">相距124米，步行约12分钟</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from "@/components/Header/header";

export default {
  data(){
      return {
        tabId:0,
      }
  },
  components: {
      "v-header": header,
  },
  methods:{
    goAnchor(selector, index) {
      this.tabId = index;
      if(selector) document.documentElement.scrollTop = document.querySelector("."+selector).offsetTop -200;
    }
  }
}

</script>
<style lang='less' scoped>
  @import 'index';
  .child-view{
    padding-top: 100px;
  }
</style>
