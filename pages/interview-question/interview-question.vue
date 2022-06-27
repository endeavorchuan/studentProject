<!--
* @name: interview-question
* @author: chuanchuan
* @date: 2022-06-27 11:01
* @description: interview-question
* @update: 2022-06-27 11:01
-->

<template>
  <view class="interview-question">
    <text>刷面试题</text>
    <MyTabbar :selected="selected"></MyTabbar>
  </view>
</template>

<script>
import MyTabbar from '@/components/tabbar/my-tabbar.vue'
export default {
  name: "interview-question",
  data() {
    return {
      selected: 1
    }
  },
  components: {
    MyTabbar
  }
}
</script>

<style scoped>

</style>
