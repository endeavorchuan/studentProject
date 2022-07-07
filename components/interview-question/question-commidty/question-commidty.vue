<!--
 * @Author: 初浩诚
 * @Date: 2022-07-07 11:03:26
 * @LastEditTime: 2022-07-07 15:21:58
 * @LastEditors: 初浩诚
 * @Description: 
 * @FilePath: /studentProject/components/interview-question/question-commidty/question-commidty.vue
 * 版权声明
-->
<template>
  <view class="question-commidty">
    <block v-for="(item, index) in dataList" :key="index">
      <QuestionItem :item="item"></QuestionItem>
    </block>
  </view>
</template>

<script>
import QuestionItem from '@/components/interview-question/question-item/question-item.vue'
export default {
  props: {
    dataList: {
      type: Array,
      default: []
    }
  },
  components: {
    QuestionItem
  }
}
</script>

<style scoped>
@import './css/question-commidty.css';
</style>