<template>
  <div class="setting-user">
<!--    <v-header title="设置"></v-header>-->
    <div class="set-list">
      <div class="item bg-active head-item">
        <input type="file" class="head-input" ref="headinput" accept="image/*" @change="selectImg($event)">
        <p class="label">头像</p>
        <p><span class="head"><van-image
        width="100%"
        height="100%"
        fit="cover"
        :src="headimg"
      /></span><i class="iconfont iconarrow-right"></i></p>
      </div>
      <div class="item bg-active" @click="nameShow = true">
        <p class="label">用户名</p>
        <p><span class="item-text">{{nickname}}</span><i class="iconfont iconarrow-right"></i></p>
      </div>
      <div class="item bg-active" @click="">
        <p class="label">手机号</p>
        <p><span class="item-text">{{mobile}}</span><i class="iconfont iconarrow-right"></i></p>
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

    <van-button class="outLogin" type="primary" size="large" @click="">保存</van-button>


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

    <div class="head-img-box" v-if="headSelectCropper">
      <div class="top-btn">
        <van-button type="default" @click="closeHead">返回</van-button>
        <van-button type="info" @click="upDataHead">确认</van-button>
      </div>
      <vueCropper
        ref="cropper"
        :autoCrop="true"
        :centerBox="true"
        :fixed="true"
        :outputSize=".5"
        :img="headCropperImg"></vueCropper>
    </div>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import montent from 'moment'
import { Toast } from 'vant'
import {commonUrl}  from '@/commonJs/index.js'
import {modify,modifySubmit,nameUpadta,headUpadta} from '@/api/index'
import { VueCropper }  from 'vue-cropper'

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
        nickname:'',
        mobile:'',
        headimg:'',

        headSelectCropper:false,
        headCropperImg:'',
      }
  },
  components: {
      "v-header": header,
      VueCropper,
  },
  mounted(){
    modify().then(res=> {
      this.modify = res.data;
      this.birthday = res.data.birthday;
      this.gender = res.data.gender;
      this.nickname = res.data.nickname;
      this.mobile = res.data.mobile;
      this.headimg = res.data.avatar;
      this.currentDate = new Date(res.data.birthday);
    });
  },
  methods:{
    // 选择头像文件
    selectImg(e){
      // console.log(e);
      let file = e.target.files[0];
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)||e.target.files.length<1) {
        return;
      }else{
        let reader = new FileReader();
        reader.onload = (e) => {
          let data;
          if (typeof e.target.result === 'object') {
          // 把Array Buffer转化为blob 如果是base64不需
            data = window.URL.createObjectURL(new Blob([e.target.result]))
          } else {
            data = e.target.result;
          }
          this.headCropperImg = data;
          this.headSelectCropper = true;
        };
        reader.readAsArrayBuffer(file);
      }
    },
    // 取消上传头像
    closeHead(){
      this.$refs.headinput.value = null;
      this.headSelectCropper = false;
    },
    // 上传头像
    upDataHead(){
      // 获取截图的blob数据
      this.$refs.cropper.getCropBlob((data) => {
        // console.log(data);
        let formData = new FormData();
        formData.append('images[0]',data);
        headUpadta(formData).then(res=>{
          Toast(res.msg);
          if(res.code === 2000){
            this.headimg = res.data;
          }
          this.closeHead();
        });
      })
    },
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
          this.nickname = res.data;
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
      &.head-item{
       position: relative;
        .head-input{
          position: absolute;
          display: block;
          width: 100%;height: 100%;
          top: 0;left: 0;
          opacity: 0;
        }
      }
    }
  }

  .head-img-box{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9;
    .top-btn{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      /*height: 100px;*/
      padding: 20px 40px 0;
      display: flex;
      justify-content: space-between;
      z-index: 99;
      .van-button{
        height: 70px;
        line-height: 70px;
      }
    }
  }
  .outLogin{
    position: fixed;
    width: 670px;
    left: 40px;
    bottom: 107px;
    border-radius: 10px;
    border: solid 1px #ff8900;
    background: #FF8900;
    color: #fff;font-size: 36px;

  }
</style>
