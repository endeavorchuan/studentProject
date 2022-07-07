<!--
 * @Author: 初浩诚
 * @Date: 2022-07-07 11:03:26
 * @LastEditTime: 2022-07-07 11:36:31
 * @LastEditors: 初浩诚
 * @Description: 
 * @FilePath: /studentProject/components/interview-question/question-commidty/question-commidty.vue
 * 版权声明
-->
<template>
  <view class="question-commidty">
    <block>
      <QuestionItem></QuestionItem>
    </block>
  </view>
</template>

<script>
import QuestionItem from '@/components/interview-question/question-item/question-item.vue'
export default {
  components: {
    QuestionItem
  }
}
</script>

<style scoped>
@import './css/question-commidty.css';
</style>