<template>
  <div>
    <div @click="$router.push('/orderDetail')">点击跳转到订单详情</div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from "@/components/Header/header";
import banner from "@/components/Banner/banner";
import article from "@/components/Article/article";
import footer from "@/components/Footer";
export default {
  name:'order',
  data(){
      return {

      }
  },
  components: {
      "v-header": header,
      "v-footer": footer,
  }
}

</script>
<style lang='less' scoped>
  @import 'index';
</style>
