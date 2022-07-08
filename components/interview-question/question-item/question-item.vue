<!--
 * @Author: 初浩诚
 * @Date: 2022-07-07 11:12:03
 * @LastEditTime: 2022-07-08 13:46:37
 * @LastEditors: 初浩诚
 * @Description: 
 * @FilePath: /studentProject/components/interview-question/question-item/question-item.vue
 * 版权声明
-->

<template>
  <view class="question-item">
    <image class="item-img" :src="item.imgUrl"></image>
    <view class="item-text">
      <view class="item-title">{{ item.title }}</view>
      <view class="item-tips">{{ item.source }}</view>
    </view>
    <view class="item-start" @tap="goDetail(item.id)">开始刷题</view>
  </view>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: []
    }
  },
  methods: {
    goDetail (typeId) {
      uni.navigateTo({
        url: '/pages/subject/subject?typeId=' + typeId
      })
    }
  }
}
</script>

<style scoped>
@import './css/question-item.css'
</style>