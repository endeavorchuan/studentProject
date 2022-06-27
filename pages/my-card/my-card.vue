<!--
* @name: my-card
* @author: chuanchuan
* @date: 2022-06-27 11:04
* @description: my-card
* @update: 2022-06-27 11:04
-->

<template>
  <view class="my-card">
    <text>我的名片</text>
    <MyTabbar :selected="selected"></MyTabbar>
  </view>
</template>

<script>
import MyTabbar from '@/components/tabbar/my-tabbar.vue'
export default {
  name: "my-card",
  data() {
    return {
      selected: 4
    }
  },
  components: {
    MyTabbar
  }
}
</script>

<style scoped>

</style>
