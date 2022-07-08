<!--
 * @Author: 初浩诚
 * @Date: 2022-07-07 16:26:45
 * @LastEditTime: 2022-07-08 17:45:45
 * @LastEditors: 初浩诚
 * @Description: 
 * @FilePath: /studentProject/components/interview-question/subject-item/subject-item.vue
 * 版权声明
-->

<template>
  <view class="swiper-item">
    <view class="item-title">
      <text>{{ index+1 }}. {{ item.title }}</text>
      <view v-if="item.content">
        <MDParserHighlight class="answer" :resource="item.content"></MDParserHighlight>
      </view>
    </view>
    <view class="item-content">
      <view class="item-result" v-if="item.answer">
        <image class="item-img" src="../../../static/imgs/result.png"></image>
        <view class="result">结果：</view>
      </view>
      <view>
        <MDParserHighlight class="answer" :resource="item.answer"></MDParserHighlight>
      </view>
      <view class="item-result" v-if="item.parsing">
        <image class="item-img" src="../../../static/imgs/explain.png"></image>
        <view class="result">解释：</view>
      </view>
      <view class="parsing">
        <MDParserHighlight class="answer" :resource="item.parsing"></MDParserHighlight>
      </view>
    </view>
  </view>
</template>

<script>
import MDParserHighlight from '@/common/cmder-MDParserHighlight/index.vue'
export default {
  props: {
    item: {
      type: Object,
      default: {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  components: {
    MDParserHighlight
  }
}
</script>

<style scoped>
@import './css/subject-item.css';
</style>