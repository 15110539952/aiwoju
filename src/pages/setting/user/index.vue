<template>
  <div class="setting">
    <div class="set-list">
      <div class="item bg-active">
        <p>头像</p>
        <p><span class="head"><van-image
        width="100%"
        height="100%"
        fit="cover"
        :src="require('assets/img/dear.png')"
      /></span><i class="iconfont iconarrow-right"></i></p>
      </div>
      <div class="item bg-active" @click="datePopup = true">
        <p>生日</p>
        <p><span class="item-text">{{birthday}}</span><i class="iconfont iconarrow-right"></i></p>
      </div>
      <div class="item">
        <p>性别</p>
        <div class="sex-type">
          <p class="active"><img class="select-img" src="~assets/img/carcle-select-yes.png"><span>男神</span></p>
          <p><img class="select-img" src="~assets/img/carcle-select-no.png"><span>女神</span></p>
        </div>
      </div>
    </div>

    <van-popup class="date-popup" v-model="datePopup" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        :item-height="88"
        @cancel="datePopup=false"
        @confirm="birthdayChange"
      />
    </van-popup>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import montent from 'moment'

export default {
  data(){
      return {
        datePopup:false,
        currentDate: new Date(),
        minDate: new Date('1950-01-01'),
        maxDate: new Date(),
        birthday: '',
      }
  },
  components: {
      "v-header": header,
  },
  methods:{
    birthdayChange(){
      this.birthday = montent(this.currentDate).format('YYYY-MM-DD');
      console.log(this.birthday)

    }
  }
}

</script>
<style lang='less' scoped>
  /deep/ .date-popup{
    width: 100%;
    /*height: 100%;*/
    height: 560px;
    .van-picker{
      width: 100%;
      bottom:0;
      position: absolute;
    }
    /*.van-picker__columns{*/
    /*  height: 220px !important;*/
    /*}*/
    /*.van-ellipsis{*/
    /*  height: 44px !important;*/
    /*  line-height: 44px !important;*/
    /*}*/
    /*.van-picker__frame{*/
    /*  height: 44px !important;*/
    /*}*/
  }
  .sex-type{
    display: flex;
    justify-content: end;
    p{
      .select-img{
        width: 23px;
        height: 23px;
        vertical-align: middle;
        margin-right: 15px;
      }
      &:first-child{
        margin-right: 50px;
      }
      width: 100px;
      text-align: center;
      color: #333;
      &:active{
        background: #f2f3f5;
      }
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
      &.bg-active:active{
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
