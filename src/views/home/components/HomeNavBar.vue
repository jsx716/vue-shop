<template>
  <div class="homenavbar">
    <nav-bar>
      <div slot="center">购物</div>
    </nav-bar>
  </div>
  
</template>

<script>

  import NavBar from '@/components/common/navbar/NavBar'

  export default {
    name: "HomeNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped lang="less" ref="stylesheet/less">

</style>