<!--
 * @Author: 初浩诚
 * @Date: 2022-07-07 15:27:51
 * @LastEditTime: 2022-07-07 15:55:03
 * @LastEditors: 初浩诚
 * @Description: 
 * @FilePath: /studentProject/pages/subject/subject.vue
 * 版权声明
-->
<template>
  <view class="subject">
    <MyHeader title="刷题"></MyHeader>
    <view class="subject-content">
      <view class="subject-common">
        <view class="dots">
          <text>1/20</text>
        </view>
        <swiper class="swiper">
          <swiper-item>
            <scroll-view class="scroll-view" scroll-y="true">
              每道题组件
            </scroll-view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <view class="subject-check">
      <view class="last">上一题</view>
      <view class="next">下一题</view>
    </view>
  </view>
</template>

<script>
import MyHeader from '@/components/start-school/my-header/my-header.vue'

export default {
  components: {
    MyHeader
  }
} 
</script>

<style scoped>
@import './css/subject.css'
</style>