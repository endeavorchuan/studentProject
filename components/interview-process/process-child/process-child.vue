<!--
 * @Author: 初浩诚
 * @Date: 2022-07-10 15:22:00
 * @LastEditTime: 2022-07-11 11:20:29
 * @LastEditors: 初浩诚
 * @Description: 
 * @FilePath: /studentProject/components/interview-process/process-child/process-child.vue
 * 版权声明
-->
<template>
  <view class="child">
    <view class="plain-list" v-if="child.objType !== 2">
      <view class="list-plain">
        <image class="list-item" src="../../../static/imgs/underline.png"></image>
        <view class="list-title">{{ child.title }}</view>
      </view>
      <view class="list-into">{{ child.reamrk }}</view>
    </view>
    <view class="plain-video" v-else>
      <view class="list-plain">
        <image class="list-item" src="../../../static/imgs/underline.png"></image>
        <view class="list-title">{{ chld.title }}</view> 
      </view>
      <view class="video-content">
        <!-- 视频播放组件 -->
        <SyVideo :objUrl="child.objPath"></SyVideo>
      </view>
    </view>
  </view>
</template>

<script>
import SyVideo from '@/components/interview-process/sy-video/sy-video.vue'
export default {
  props: {
    child: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      
    }
  },
  components: {
    SyVideo
  }
}
</script>

<style>
@import './css/process-child.css'
</style>