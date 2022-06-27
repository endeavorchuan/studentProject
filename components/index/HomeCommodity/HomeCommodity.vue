<!--
* @name: HomeCommodity
* @author: chuanchuan
* @date: 2022-06-27 14:37
* @description: HomeCommodity
* @update: 2022-06-27 14:37
-->

<template>
  <view class="home-commodity">
    <block>
      <HomeItem></HomeItem>
    </block>
  </view>
</template>

<script>
import HomeItem from '@/components/index/HomeItem/HomeItem.vue'
export default {
  name: "HomeCommodity",
  components: {
    HomeItem
  }
}
</script>

<style scoped>

</style>
