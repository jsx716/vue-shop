<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="left"><slot name="img"></slot></div>
    <div v-else class="center"><slot name="img-active"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        // $route 表示处于活跃下的路由地址，那个处于活跃就是那个地址
        return  this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? { color: this.activeColor } : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped lang="less" ref="stylesheet/less">
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    align-items: center;
    img {
      width: 24px;
      padding-bottom: 2px;
    }
    .active {
      color: #f40;
    }
  }

</style>