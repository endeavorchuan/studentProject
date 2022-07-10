<!--
 * @Author: 初浩诚
 * @Date: 2022-07-08 22:57:39
 * @LastEditTime: 2022-07-10 15:22:21
 * @LastEditors: 初浩诚
 * @Description: 
 * @FilePath: /studentProject/components/interview-process/process-item/process-item.vue
 * 版权声明
-->
<template>
  <view class="process-content">
    <view class="process-item" v-for="(item, index) in processList" :key="item.id">
      <view class="item">
        <view class="item-title">
          <image class="item-img" src="../../../static/imgs/process-border.png"></image>
          <view class="title-content">{{ index+1 }}、{{ item.title }}</view>
        </view>
        <view class="item-content">
          <block>
            <!-- 内容组件 -->
            <ProcessChild></ProcessChild>
          </block>
        </view>
        <view class="item-book">
          <image class="book-img" src="../../../static/imgs/process-book.png"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import ProcessChild from '@/components/interview-process/process-child/process-child.vue'
export default {
  props: {
    processList: {
      type: Array,
      default: []
    }
  },
  components: {
    ProcessChild
  }
}
</script>

<style scoped>
@import './css/process-item.css'
</style>