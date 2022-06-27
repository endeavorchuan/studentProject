<!--
* @name: start-school
* @author: chuanchuan
* @date: 2022-06-27 19:33
* @description: start-school
* @update: 2022-06-27 19:33
-->

<template>
  <view class="start-school">
    <MyHeader :title="title"></MyHeader>
  </view>
</template>

<script>
import MyHeader from '@/components/start-school/my-header/my-header.vue'
export default {
  name: "start-school",
  data () {
    return {
      title: ''
    }
  },
  onLoad(options) {
    const item = JSON.parse(options.item)
    this.title = item.className
  },
  components: {
    MyHeader
  }
}
</script>

<style scoped>

</style>
