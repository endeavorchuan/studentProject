<!--
* @name: celebrity-list
* @author: chuanchuan
* @date: 2022-06-28 11:55
* @description: celebrity-list
* @update: 2022-06-28 11:55
-->

<template>
  <view class="celebrity-list">
    <Celebrity></Celebrity>
  </view>
</template>

<script>
import Celebrity from '@/components/start-school/celebrity-list/celebrity/celebrity.vue'
export default {
  name: "celebrity-list",
  components: {
    Celebrity
  }
}
</script>

<style scoped>

</style>
