<template>
  <div class="contacts">
<!--    <div class="contact-item">-->
<!--      <p>姓名：</p>-->
<!--      <input type="text">-->
<!--    </div>-->
    <van-cell-group>
      <van-field
        label-align="left"
        v-model="name"
        label="姓名："
        maxlength="10"
        placeholder="请输入联系人真实姓名"
      />

      <van-field
        label-align="left"
        v-model="phone"
        label="联系方式："
        maxlength="11"
        placeholder="请输入联系人手机号码"
      />
    </van-cell-group>


    <div class="footer">
      <van-button class="add-contact" type="primary" size="large" @click="save">保存</van-button>
      <p class="delete-contact" @click="deleted" v-if="type==='edit'"><span>删除联系人</span></p>
    </div>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import { Dialog } from 'vant';

export default {
  data(){
      return {
        name:'',
        phone:'',
        type: 'add',
      }
  },
  components: {
      "v-header": header,
  },
  mounted(){
    this.type = this.$route.params.name || 'add';
    console.log(this.type);
  },
  methods:{
    save(){

    },
    deleted(){
      Dialog.confirm({
        title: '确认删除该联系人？',
        confirmButtonText:'删除',
        message: ''
      }).then(() => {
        // on confirm
        this.$router.goBack(-1)
      }).catch(() => {
        // on cancel
      });
    }
  }
}

</script>
<style lang='less' scoped>
  /deep/ .van-cell {
    font-size: 24px;
    .van-field__label {
      text-align: left;
      color: #999;
    }
    .van-cell__value{
      color: #333;
    }
  }

  .footer{
    background: #fff;
    position: fixed;
    height: 300px;
    width: 100%;
    bottom: 0;
    left: 0;
  }
  .add-contact{
    width: 670px;
    height: 100px;
    line-height: 100px;
    margin:30px auto;
    border-radius: 10px;
    border: solid 1px #666666;
    background: #FF8900;
    color: #fff;
    font-size: 36px;
  }
  .delete-contact{
    line-height: 70px;
    text-align: center;
    font-size: 36px;
    color: #999;
    span{
      padding: 0 50px;
      display: inline-block;
      &:active{
        background: #f2f3f5;
      }
    }
  }
</style>
