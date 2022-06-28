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
    <scroll-view class="scroll-view" scroll-y="true">
      <view>
        <view class="banner-bg">
          <view class="sign-btn">立即填写 > </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import MyHeader from '@/components/start-school/my-header/my-header.vue'
export default {
  name: "start-school"
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
@import "./css/start-school.css";
</style>
