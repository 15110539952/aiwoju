<template>
  <div>
      <v-header title="个人中心"></v-header>
      <v-banner></v-banner>
      <v-footer></v-footer>
      <v-article></v-article>
      <img src="~assets/img/me.png" alt="">
  </div>
</template>

<script>
import header from "@/components/Header/header";
import banner from "@/components/Banner/banner";
import article from "@/components/Article/article";
import footer from "@/components/Footer";
export default {
    data(){
        return {

        }
    },
    components: {
        "v-header": header,
        "v-banner": banner,
        "v-footer": footer,
        "v-article":article
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
