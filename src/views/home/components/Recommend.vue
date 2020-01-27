<template>
  <div class="recommend">
    <div class="recommend-item">
      <a href="">
        <img src="@/assets/images/news/1.jpg" alt="">
        <div>新手必读</div>
      </a>
    </div>
    <div class="recommend-item">
      <a href="">
        <img src="@/assets/images/news/1.jpg" alt="">
        <div>新手必读</div>
      </a>
    </div>
    <div class="recommend-item">
      <a href="">
        <img src="@/assets/images/news/1.jpg" alt="">
        <div>新手必读</div>
      </a>
    </div>
    <div class="recommend-item">
      <a href="">
        <img src="@/assets/images/news/1.jpg" alt="">
        <div>新手必读</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend"
  }
</script>

<style scoped lang="less" ref="stylesheet/less">
  .recommend {
    width: 100%;
    display: flex;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
    .recommend-item {
      flex: 1;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
      div {
        color: #f40;
      }
    }
  }
</style>