<template>
  <div class="setting">
    <div class="set-list">
      <div class="item">
        <p>头像</p>
        <p><span class="head"><van-image
        width="100%"
        height="100%"
        fit="cover"
        :src="require('assets/img/dear.png')"
      /></span><i class="iconfont iconarrow-right"></i></p>
      </div>
      <div class="item">
        <p>生日</p>
        <p><span class="item-text">1990-10-22</span><i class="iconfont iconarrow-right"></i></p>
      </div>
      <div class="item">
        <p>性别</p>
        <div class="sex-type">
          <p><span>男神</span></p>
          <p><span>女神</span></p>
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

      }
  },
  components: {
      "v-header": header,
  }
}

</script>
<style lang='less' scoped>
  .sex-type{
    display: flex;
    justify-content: end;
    p{
      width: 100px;
      text-align: center;
      color: #333;
      &.active{
        color: #ff3500;
      }
    }
  }
  .set-list{
    font-size: 24px;
    color: #333333;
    line-height: 90px;
    padding: 0 40px;
    .head{
      vertical-align: middle;
      margin-right: 20px;
      display: inline-block;
      border-radius: 50%;
      width: 58px;
      height: 58px;
      /deep/ img{
        border-radius: 50%;
      }
    }
    .item{
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      &:active{
        background: #f2f3f5;
      }
      .iconfont:before{
        color: #086fa1;
        font-size: 20px;
      }
      .item-text{
        margin-right: 20px;
      }
    }
  }
</style>
