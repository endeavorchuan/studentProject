<!--
* @name: notice
* @author: chuanchuan
* @date: 2022-06-28 14:51
* @description: notice
* @update: 2022-06-28 14:51
-->

<template>
  <view class="notice">
    <view class="notice-item">
      <view class="notice-main">
        <block>
          <image class="notice-img" src="../../../static/imgs/upgrade.png"></image>
        </block>
        <view class="notice-warning">
          <text>我是第一条公告内容！</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "notice"
}
</script>

<style scoped>
@import "./css/notice.css";
</style>
