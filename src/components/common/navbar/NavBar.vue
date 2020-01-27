<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped lang="less" ref="stylesheet/less">
  .navbar {
    display: flex;
    background-color: rgb(250, 80, 0);
    height: 49px;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    .left, .right {
      width: 60px;
    }
    .center {
      flex: 1;
    }
  }
</style>