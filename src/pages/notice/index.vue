<template>
  <div class="notice">
    <v-header :title="title"></v-header>

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
  computed:{
    'title'(){
      return this.$route.name === 'notice-list'?'公告栏':'活动详情';
    },
  },
  components: {
      "v-header": header,
  },
  mounted(){
  }
}

</script>
<style lang='less' scoped>
  .child-view{
    padding-top: 100px;
  }
</style>
