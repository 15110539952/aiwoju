<template>
  <div class="orderdetail">
    <v-header title="订单详情">
      <i slot="right-icon" class="iconfont iconfenxiang"></i>
    </v-header>
    <div class="top-bg"></div>

    <div class="pay-type-top-box">
      <!--region 支付成功-->
      <div class="paySuccess" v-show="false">
        <div class="title">
          <p class="left">支付成功</p>
          <p class="right">确认倒计时：<span>00：29：59</span></p>
        </div>
        <div class="content">
          <div><p class="label">取消规则：</p><p class="text-detial">入住前可免费取消</p></div>
          <div><p class="label">入住说明：</p><p class="text-detial">入住人携带好个人身份证酒店前台办理入住
            不可携带宠物入住
          </p></div>
        </div>
      </div>
      <!--endregion-->

      <!--region 待支付-->
      <div class="no-pay" v-show="false">
        <div class="title">
          <p class="left">待支付</p>
          <p class="right">支付倒计时：：<span>00：29：59</span></p>
        </div>
        <div class="content">
          <div><p class="label">取消规则：</p><p class="text-detial">入住前可免费取消</p></div>
        </div>
        <van-button class="to-pay" type="default" @click="">
          去支付<span>￥</span><span class="number">456</span>
        </van-button>
      </div>
      <!--endregion-->

      <!--region 待评价-->
      <div class="no-evaluate">
        <div class="title">
          <p class="left">待评价</p>
          <p class="right"></p>
        </div>
        <div class="evaluate-btn">
          <van-button class="repeat-order" type="default" @click="">再次预定</van-button>
          <van-button class="to-evaluate" type="default" @click="">去评价</van-button>
        </div>
      </div>
      <!--endregion-->

      <!--region 已取消-->
      <div class="order-close" v-show="false">
        <div class="title">
          <p class="left">已取消</p>
          <p class="right"></p>
        </div>
        <div class="content">
          <div class="close">
            <p>退款进度</p>
            <p>已退款</p>
          </div>
        </div>
      </div>
      <!--endregion-->


    </div>

    <!--region 价格模块-->
    <div class="price-list">
      <div class="item">
        <p>使用优惠券：</p>
        <p>-￥<span>123</span></p>
      </div>
      <div class="item">
        <p>在线支付：</p>
        <p>￥<span>456</span></p>
      </div>
    </div>
    <!--endregion-->
    <div class="hotel-info">
      <div class="address active-bg">
        <p>小店区学府街体育路口长治路405号9层</p><i class="iconfont iconarrow-right"></i>
      </div>
      <div class="hotel-tab">
        <div class="hotel-address">
          <i class="iconfont iconorder-weizhi"></i>
          <p>地图定位</p>
        </div>
        <div class="hotel-set">
          <i class="iconfont iconorder-shebei"></i>
          <p>设施配置</p>
        </div>
        <div class="hotel-tel">
          <i class="iconfont iconorder-dianhua"></i>
          <p>酒店前台</p>
        </div>
      </div>
      <div class="room-info">
        <p class="title">商务大床房·1间</p>
        <p class="room-type">
          <span>19㎡</span>
          <span>1.8X2m大床</span>
          <span>2人入住</span>
          <span>有窗</span>
        </p>
        <div class="room-time"><span>2018-12-01</span> 至 <span>2018-12-02</span> 1晚</div>
      </div>
    </div>

    <div class="user-info">
      <div class="item"><span class="label">入住人：</span><span class="content">郭晓小</span></div>
      <div class="item"><span class="label">联系电话：</span><span class="content number">12345678901</span></div>
      <div class="item"><span class="label">预计到店：</span><span class="content number">14：00</span></div>
    </div>

    <div class="orderid">
      <p class="label">订单号：</p>
      <p class="content"><span class="number">1812001456</span>
        <van-button type="default">复制</van-button>
      </p>
    </div>



    <!--region 取消订单-->
    <van-button class="footer" type="default" @click="isCloseOrder= true">取消订单</van-button>
    <!--endregion-->

    <!--region  取消订单弹出框-->
    <van-popup v-model="isCloseOrder">
      <div class="is-pay">
        <p class="title-tip">取消订单</p>
        <div class="tip-content">
          <p>·已支付订单，取消订单将在3个工作日内原账户返还</p>
          <p>·未支付订单，取消后将删除订单</p>
        </div>
        <div class="btn van-hairline--top">
          <b></b>
          <p class="left" @click="closeOrder(1)">取消订单</p>
          <p class="right" @click="closeOrder(0)">退出</p>
        </div>
      </div>
    </van-popup>
    <!--endregion-->
  </div>
</template>

<script>
import header from "@/components/Header/header";
export default {
  name:'orderDetail',
  data(){
      return {
        isCloseOrder:false,
        orderStatus: 0,
      }
  },
  components: {
      "v-header": header,
  },
  methods:{
    closeOrder(i){
      // if(i){
      // }
      this.isCloseOrder= false;
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
