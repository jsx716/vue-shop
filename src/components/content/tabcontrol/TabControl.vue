<template>
  <div class="tab-control">
    <div
            class="tab-control-item"
            v-for="(item, index) in titles"
            :class="{active: currentIndex === index}"d
            :key="index"
            @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }

      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped lang="less" ref="stylesheet/less">
  .tab-control {
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    background-color: #f5f5f5;
    box-sizing: border-box;
    .tab-control-item {
      flex: 1;
    }
  }
  span {
    padding: 5px;
  }
  .active span{
    color: #ff4400;
    border-bottom: 2px solid #ff4400;
  }
</style>