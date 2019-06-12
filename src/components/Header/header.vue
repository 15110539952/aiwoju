<template>
  <div id="header">
    <div class="title">{{title}}</div>
  </div>
</template>
<script>
export default {
  props: ["title"]
};
</script>
<style lang="scss" scoped>
#header {
  .title {
    width: 100%;
    height: 1.333333rem;
    line-height: 1.333333rem;
    font-size: 0.4rem;
    font-weight: 500;
    overflow: hidden;
    @include border-1px(#ccc);
  }
}
</style>
