<!--
 * @Author: 初浩诚
 * @Date: 2022-07-07 16:26:45
 * @LastEditTime: 2022-07-08 12:26:17
 * @LastEditors: 初浩诚
 * @Description: 
 * @FilePath: /studentProject/components/interview-question/subject-item/subject-item.vue
 * 版权声明
-->

<template>
  <view class="swiper-item">
    <view class="item-title">
      <text>1、获取长度？</text>
      <view>
        <MDParserHighlight></MDParserHighlight>
      </view>
    </view>
    <view class="item-content">
      <view class="item-result">
        <image class="item-img" src="../../../static/imgs/result.png"></image>
        <view class="result">结果：</view>
      </view>
      <view>
        <MDParserHighlight class="answer"></MDParserHighlight>
      </view>
      <view class="item-result">
        <image class="item-img" src="../../../static/imgs/explain.png"></image>
        <view class="result">解释：</view>
      </view>
      <view >
        <MDParserHighlight class="parsing"></MDParserHighlight>
      </view>
    </view>
  </view>
</template>

<script>
import MDParserHighlight from '@/common/cmder-MDParserHighlight/index.vue'
export default {
  components: {
    MDParserHighlight
  }
}
</script>

<style scoped>
@import './css/subject-item.css';
</style>