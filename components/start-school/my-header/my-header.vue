<!--
* @name: my-header
* @author: chuanchuan
* @date: 2022-06-27 21:12
* @description: my-header
* @update: 2022-06-27 21:12
-->

<template>
  <view class="headers">
    <view class="nav_top">
      <view class="status-bar"></view>
      <view class="topContent">
        <view class="goBack" @click="goTo">
          <slot name="left">
            <image class="image" src="../../../static/imgs/arrow.png"></image>
          </slot>
        </view>
        <view class="title">
          <slot name="center">
            <view>{{ title }}</view>
          </slot>
        </view>
      </view>
    </view>
    <view class="marginBox">

    </view>
  </view>
</template>

<script>
export default {
  name: "my-header",
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    goTo () {
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style scoped>
@import "./css/my-header.css";
</style>
