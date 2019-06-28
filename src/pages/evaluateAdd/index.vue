<template>
  <div class="evaluate-add">
    <v-header title="评价"></v-header>
    <div class="room-info">
      <div class="room">
        <p class="name">商务大床房</p>
        <p class="to-detail" @click="$router.push('/orderDetail')">
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
      <p class="score-item" v-for="(scoreItem,indexS) in scoreList" :key="'setscore'+indexS">
        <span class="label">设施：</span>
        <i class="iconfont iconpinglun2"
           @click="scoreChange(indexS,index)"
           v-for="(item,index) in scoreItem.score"
           :key="'facilities-yes'+index"></i><i class="iconfont iconshoucang_shoucang"
           @click="scoreChange(indexS,scoreItem.score+index+1)"
           v-for="(item,index) in 5-scoreItem.score"
           :key="'facilities-no'+index"></i>
      </p>
    </div>
    <p class="pingfen">评分</p>
    <div class="evaluate-content">
      <textarea class="content" placeholder="请输入你想说的话"></textarea>
    </div>
    <p class="bg20"></p>
    <p class="pingfen">照片</p>
    <van-uploader
      :after-read="afterRead"
      v-model="fileList"
      multiple
      @delete="imgDelete"
      :preview-image="true"
      :max-count="9"
    />
    <div class="evaluate-img-box">
<!--      <img class="img" src="assets/img/dear.png">-->
<!--      <div class="add"></div>-->
    </div>

    <van-button class="submit-img" type="primary" size="large" @click="pushImg">提交</van-button>
  </div>
</template>

<script>
import header from "@/components/Header/header";
export default {
  data(){
      return {
        scoreList:[
          {
            name:'设施：',
            score:5
          },
          {
            name:'服务：',
            score:0
          },
          {
            name:'卫生：',
            score:4
          },
          {
            name:'位置：',
            score:0
          },
        ],
        fileList:[],
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
    scoreChange(indexS,index){
      this.scoreList[indexS].score = index;
    },
    afterRead(file){
      console.log(file);
      console.log(this.fileList);
    },
    imgDelete(file){
      console.log(file);
    },
    pushImg(){

    }
  }
}

</script>
<style lang='less' scoped>
  @import 'index';
  .child-view{
    padding-top: 100px;
    padding-bottom: 130px;
  }
</style>
