<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped lang="less" ref="stylesheet/less">
  .tab-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: 999;
    width: 100%;
    height: 49px;
    background-color: #f5f5f5;
  }
</style>