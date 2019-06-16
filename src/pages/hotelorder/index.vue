<template>
  <div>
    <v-header title="酒店下单"></v-header>
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
  .textfont{
    width: 200px;
    height: 200px;
    margin: 0 auto;
    background: gray;
    font-size: 30px;
  }
  .textfont1{
    width: 200PX;
    height: 200PX;
    margin: 0 auto;
    background: gray;
    font-size: 30px; /*no*/
  }
</style>
