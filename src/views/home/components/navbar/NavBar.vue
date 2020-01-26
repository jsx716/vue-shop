<template>
  <div class="navbar">
    <div class="left">ni</div>
    <div class="center">hao</div>
    <div class="right">搜索</div>
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
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgb(250, 80, 0);
    height: 49px;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    .left {
      flex: 1;
    }
    .center {
      flex: 3;
    }
    .right {
    flex: 1;
  }
  }
</style>