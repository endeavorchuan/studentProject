<!--
* @name: HomeItem
* @author: chuanchuan
* @date: 2022-06-27 14:38
* @description: HomeItem
* @update: 2022-06-27 14:38
-->

<template>
  <view class="home-item">
    <view class="item-main" @tap="goStart">
      <view class="item-content">
        <image class="image left-arrow" src="../../../static/imgs/right-arrow.png"></image>
        <view class="item-text">{{ item.className }}</view>
        <image class="image" src="../../../static/imgs/right-arrow.png"></image>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "HomeItem",
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  methods: {
    goStart () {
      uni.navigateTo({
        url: '/pages/start-school/start-school'
      })
    }
  }
}
</script>

<style scoped>
@import "./css/HomeItem.css";
</style>
