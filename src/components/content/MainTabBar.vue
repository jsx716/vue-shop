<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="green">
        <img src="@/assets/images/tabbar/apple.png" slot="img" alt="">
        <img src="@/assets/images/tabbar/apple-active.png" slot="img-active" alt="">
        <div slot="text">苹果兼职</div>
      </tab-bar-item>
      <tab-bar-item path="/android">
        <img src="@/assets/images/tabbar/apple.png" slot="img" alt="">
        <img src="@/assets/images/tabbar/apple-active.png" slot="img-active" alt="">
        <div slot="text">苹果兼职</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

  import TabBar from '../common/TabBar/TabBar'
  import TabBarItem from '../common/TabBar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBarItem,
      TabBar
    }
  }
</script>

<style scoped lang="less" ref="stylesheet/less">

</style>