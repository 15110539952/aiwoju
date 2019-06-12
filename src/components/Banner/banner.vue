<template>
  <div id="banner">
      <div class="box">
          <div class="left"></div>
          <div class="right">
              <div class="top"></div>
              <div class="bottom"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}

</script>
<style lang='scss' scoped>
    #banner{
        width: 100%;
        box-sizing: border-box;
        padding: 0 .48rem;
        height: 4rem;
        margin: .346667rem 0;
        .box{
            display: flex;
            flex-direction: row;
            .left{
                width: 6rem;
                height: 4rem;
                background-color: red;
                margin-right: .16rem;
            }
            .right{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 2.853333rem;
                
                .top{
                    margin-bottom: .133333rem;
                    height: 1.866667rem;
                    width: 100%;
                    background-color: yellow;
                }
                .bottom{
                    margin-top: .133333rem;
                    width: 100%;
                    height: 1.866667rem;
                    background-color:blue;
                }
            }
        }
    }
</style>