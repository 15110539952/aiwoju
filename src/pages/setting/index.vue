<template>
  <div class="setting">
    <v-header title="设置"></v-header>
    <p class="bg20"></p>

    <router-view/>
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
  @import 'index';
  .child-view{
    padding-top: 100px;
  }
</style>
