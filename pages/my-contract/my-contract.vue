<!--
* @name: my-contract
* @author: chuanchuan
* @date: 2022-06-27 11:04
* @description: my-contract
* @update: 2022-06-27 11:04
-->

<template>
  <view class="my-contract">
    <text>我的协议</text>
    <MyTabbar :selected="selected"></MyTabbar>
  </view>
</template>

<script>
import MyTabbar from '@/components/tabbar/my-tabbar.vue'
export default {
  name: "my-contract",
  data() {
    return {
      selected: 3
    }
  },
  components: {
    MyTabbar
  }
}
</script>

<style scoped>

</style>
