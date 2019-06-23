<template>
  <div class="order-list">
    <div class="order-item"
         v-for="(item,index) in orderList"
         :key="index">
      <div @click="orderDetail(item)" class="item-bg">
        <div class="top">
          <i class="iconfont iconHOME-quyushousuo"></i>
          <span class="room-name">商务大床房·1间</span>
          <span class="room-price">￥456</span>
        </div>
        <div class="room-info">
          <p>12月01日-12月02日 | <span>共1晚</span></p>
          <p class="time">到店时间：14：00</p>
        </div>
      </div>
      <div class="bottom">
        <div class="status">
          <span class="label" v-if="item.status !== 4">
            {{item.status === 0?'待支付'
            :item.status === 1?'待确认'
            :item.status === 2?'待入住'
            :item.status === 3?'已结束'
            :item.status === 5?'已退款'
            :item.status === 6?'已完结，订单已关闭':''
            }}
          </span>
          <span class="label-close" v-else>已取消</span>
          <span class="time" v-if="item.status === 1">00：29：59</span>
        </div>
        <div class="btn-type">
          <div class="close-btn" v-if="item.status === 1">取消</div>
          <van-button class="to-pay"
                      type="default"
                      v-if="item.status === 0"
                      @click="">去支付</van-button>
          <van-button class="to-pay"
                      type="default"
                      v-if="item.status === 3"
                      @click="">去评价</van-button>
          <van-button class="to-close"
                      type="default"
                      v-if="item.status === 1 || item.status === 2"
                      @click="">取消</van-button>
          <span class="refund" v-if="item.status === 4">退款中</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "orderList",
      props:['orderList'],
      data(){
        return{

        }
      },
      mounted(){
        // console.log(this.orderList);
      },
      methods:{
        orderDetail(item){
          this.$router.push('/orderDetail');
        },
      }
    }
</script>

<style lang="less" scoped>
  .order-list{
    padding: 0 40px;
  }
  .order-item{
    background-color: #ffffff;
    box-shadow: 0px 4px 18px 0px
    rgba(153, 153, 153, 0.27);
    border-radius: 20px;
    padding: 40px 30px 0;
    margin-bottom: 40px;
    .top{
      text-align: left;
      color: #666;
      line-height: 50px;
      .iconfont{
        color: #999999;
        margin-right: 20px;
        &:before{
          vertical-align: top;
          font-size: 48px;
        }
      }
      .room-name{
        font-size: 32px;
        display: inline-block;
        width: 400px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .room-price{
        float: right;
        font-family: PingFang-SC-Heavy;
        font-size: 24px;
      }
    }
    .room-info{
      text-align: left;
      padding-left: 68px;
      padding-top: 20px;
      font-size: 24px;
      color: #666666;
      line-height: 40px;
      .time{
        letter-spacing: 2px;
      }
      border-bottom: solid 1px #eeeeee;
    }
    .item-bg{
      &:active{
        background: #f2f3f5;
      }
    }
    .bottom{
      display: flex;
      justify-content: space-between;
      text-align: left;
      padding: 10px 0 10px 68px;
      line-height: 70px;
      .status{
        color: #ff3500;
        font-size: 24px;
        .time{
          font-size: 20px;
          margin-left: 15px;
        }
        .label-close{
          color: #666666;
        }
      }
      .btn-type{
        display: flex;
        justify-content: end;
        .van-button{
          width: 160px;
          height: 70px;
          line-height: 70px;
          color: #fff;
          background-color: #ff8900;
          border-radius: 10px;
          border: 0;
        }
        .to-close{
          color: #ff8900;
          background: #fff;
          border: solid 1px #ff8900;
        }
        .close-btn{
          line-height: 70px;
          width: 150px;
          margin-right: 20px;
          text-align: center;
          font-size: 24px;
          color: #666;
          border-radius: 10px;
          &:active{
            background: #f2f3f5;
          }
        }
        .refund{
          font-size: 24px;
          color: #ff3500;
        }
      }
    }
  }


</style>
