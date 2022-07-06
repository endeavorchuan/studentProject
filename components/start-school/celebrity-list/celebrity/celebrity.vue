<!--
* @name: celebrity
* @author: chuanchuan
* @date: 2022-06-28 12:01
* @description: celebrity
* @update: 2022-06-28 12:01
-->

<template>
  <view class="celebrity">
    <view class="celebrity-item" v-for="item in dataList" :key="item.id">
      <view class="item-header">
        <view class="header-left">
          <view class="student">{{ item.studentName }}</view>
          <view class="student-stars">
            <image class="image stars" src="../../../../static/imgs/stars.png"></image>
          </view>
        </view>
        <view class="header-right">
          <image class="image trophy" src="../../../../static/imgs/trophy.png"></image>
        </view>
      </view>
      <view class="item-content">
        <view class="item-list">
          就业城市：<text class="item-text">{{ item.wrokCity }}</text>
        </view>
        <view class="item-list">
          就业薪资：<text class="item-text item-active-text">{{ item.salary }}</text>
        </view>
        <view class="item-list">
          来自班级：<text class="item-text">{{ item.className }}</text>
        </view>
      </view>
      <view class="item-foot">
        <view class="foot-item">
          <image class="foot-bg" src="../../../../static/imgs/education.png"></image>
          <view class="foot-text">{{ item.education }}</view>
        </view>
        <view class="foot-item">
          <image class="foot-bg" src="../../../../static/imgs/shezhao.png"></image>
          <view class="foot-text">{{ item.workWay }}</view>
        </view>
        <view class="foot-item">
          <image class="foot-bg" src="../../../../static/imgs/age.png"></image>
          <view class="foot-text">{{ item.studentAge }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "celebrity",
  props: {
    dataList: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
@import "./css/celebrity.css";
</style>
