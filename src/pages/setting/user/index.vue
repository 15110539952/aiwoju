<template>
  <div class="setting-user">
<!--    <v-header title="设置"></v-header>-->
    <div class="set-list">
      <div class="item bg-active">
        <p class="label">头像</p>
        <p><span class="head"><van-image
        width="100%"
        height="100%"
        fit="cover"
        :src="modify.avatar"
      /></span><i class="iconfont iconarrow-right"></i></p>
      </div>
      <div class="item bg-active" @click="nameShow = true">
        <p class="label">用户名</p>
        <p><span class="item-text">{{oname}}</span><i class="iconfont iconarrow-right"></i></p>
      </div>
      <div class="item bg-active" @click="datePopup = true">
        <p class="label">生日</p>
        <p><span class="item-text">{{birthday}}</span><i class="iconfont iconarrow-right"></i></p>
      </div>
      <div class="item">
        <p class="label">性别</p>
        <div class="sex-type">
          <p :class="gender === 1?'active':''" @click="bindSex(1)">
            <img v-if="gender === 1" class="select-img" src="~assets/img/carcle-select-yes.png">
            <img v-else class="select-img" src="~assets/img/carcle-select-no.png">
            <span>男神</span></p>
          <p :class="gender === 2?'active':''" @click="bindSex(2)">
            <img v-if="gender === 2" class="select-img" src="~assets/img/carcle-select-yes.png">
            <img v-else class="select-img" src="~assets/img/carcle-select-no.png">
            <span>女神</span></p>
        </div>
      </div>
    </div>

    <van-popup class="date-popup" v-model="datePopup" position="right">
      <van-datetime-picker
        title="设置生日"
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        :item-height="88"
        :visible-item-count="5"
        @cancel="datePopup=false"
        @confirm="birthdayConfirm"
        :formatter="formatter"
      />
    </van-popup>

    <van-dialog
      v-model="nameShow"
      title="修改用户名"
      show-cancel-button
      @confirm="nameUpdata"
      @close="name=''"
    >
      <van-field v-model="name" maxlength="16" placeholder="请输入用户名" />
    </van-dialog>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import montent from 'moment'
import { Toast } from 'vant'
import {commonUrl}  from '@/commonJs/index.js'
import {modify,modifySubmit,nameUpadta} from '@/api/index'

export default {
  data(){
      return {
        nameShow:false,
        datePopup:false,
        currentDate: new Date(1990,0,1),
        minDate: new Date('1950-01-01'),
        maxDate: new Date(),
        birthday: '',
        gender:0, // 1男，2女
        modify:'',
        name:'',
        oname:''
      }
  },
  components: {
      "v-header": header,
  },
  mounted(){
    modify().then(res=> {
      this.modify = res.data;
      this.birthday = res.data.birthday;
      this.gender = res.data.gender;
      this.oname = res.data.oname || '';
      this.currentDate = new Date(res.data.birthday);
    });
  },
  methods:{
    birthdayConfirm(){
      this.birthday = montent(this.currentDate).format('YYYY-MM-DD');
      console.log(this.birthday)
      this.datePopup = false; // 关闭生日选择
      modifySubmit({birthday:this.birthday}).then(res=> {
        Toast(res.msg);
      });
    },
    bindSex(i){
      this.gender = i;
      modifySubmit({gender:this.gender}).then(res=> {
        Toast(res.msg);
      });
    },
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      }else if (type === 'day'){
        return `${value}日`
      }
      return value;
    },
    nameUpdata(){
      if(!this.name){
        Toast('请输入用户名');
        return;
      }
      nameUpadta({new_name:this.name}).then(res=>{
        Toast(res.msg);
        if(res.code === 2000){
          this.oname = res.data;
        }
      });
    }
  }
}

</script>
<style lang='less' scoped>
  /deep/ .date-popup{
    width: 100%;
    height: 100%;
    .van-picker__columns{
      margin-top: 200px;
    }
    .van-picker__cancel, .van-picker__confirm{
      color: #ff8900;
    }
    .van-picker{
      width: 100%;
      top: 0;
      position: absolute;
    }
    .van-picker__title{
      color: #666;
      font-weight: inherit;
    }
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
        /*background: #f2f3f5;*/
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
      .label{
        text-align: left;
        width: 200px;
      }
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
