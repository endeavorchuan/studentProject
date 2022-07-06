<!--
* @name: interview-question
* @author: chuanchuan
* @date: 2022-06-27 11:01
* @description: interview-question
* @update: 2022-06-27 11:01
-->

<template>
  <view class="interview-question">
    <MyHeader title="面试题"></MyHeader>

    <view class="question-content">
      <!-- 搜索区域 -->
      <view class="question-header">
        <input class="question-input" type="text" placeholder="请输入搜索的关键字" />
        <image class="question-search" src="../../static/imgs/search.png"></image>
      </view>
      <!-- 主区域 -->
      <scroll-view scroll-y="true">
        <view class="commidty">
          板块组件
        </view>
      </scroll-view>
    </view>

    <MyTabbar :selected="selected"></MyTabbar>
  </view>
</template>

<script>
import MyHeader from '@/components/start-school/my-header/my-header'
import MyTabbar from '@/components/tabbar/my-tabbar.vue'

export default {
  name: "interview-question",
  data() {
    return {
      selected: 1
    }
  },
  components: {
    MyHeader,
    MyTabbar
  }
}
</script>

<style scoped>
@import './css/interview-question.css';
</style>
