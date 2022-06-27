<!--
* @name: interview-process
* @author: chuanchuan
* @date: 2022-06-27 11:04
* @description: interview-process
* @update: 2022-06-27 11:04
-->

<template>
  <view class="interview-process">
    <text>面试流程</text>
    <MyTabbar :selected="selected"></MyTabbar>
  </view>
</template>

<script>
import MyTabbar from '@/components/tabbar/my-tabbar.vue'
export default {
  name: "interview-process",
  data() {
    return {
      selected: 2
    }
  },
  components: {
    MyTabbar
  }
}
</script>

<style scoped>

</style>
