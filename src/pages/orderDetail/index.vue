<template>
  <div>
    <v-header title="订单详情"></v-header>
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
        "v-footer": footer,
    }
}

</script>
<style lang='less' scoped>
</style>
