<!--
 * @Author: 初浩诚
 * @Date: 2022-07-11 11:16:13
 * @LastEditTime: 2022-07-11 11:22:10
 * @LastEditors: 初浩诚
 * @Description: 视频播放插件
 * @FilePath: /studentProject/components/interview-process/sy-video/sy-video.vue
 * 版权声明
-->
<template>
  <view class="syvideo">
    <video class="video" :src="objUrl" :controls="true" :enable-play-gesture="truie"></video>
  </view>
</template>

<script>
export default {
  props: {
    objUrl: {
        type: String,
        default: ''
    }
  }
}
</script>

<style scoped>
@import './css/sy-video.css'
</style>