<!--
 * @Author: 初浩诚
 * @Date: 2022-07-10 15:22:00
 * @LastEditTime: 2022-07-11 11:41:09
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
      <view class="list-into" @tap="goReamrk(child)">{{ child.reamrk }}</view>
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
  methods: {
    goReamrk(child) {
      if (child.objType === 0) {
        // 面试题
        uni.switchTab({
            url: '/pages/interview-question/interview-question'
        })
      } else if (child.objType === 1) {
        // 链接
        this.copy(child.objPath)
      }
    },
    copy(value) {
      uni.showModal({
        content: value,   // 模板中提示的内容
        confirmText: '复制内容',
        success: () => {
          uni.setClipboardData({
            data: value,    // 被复制的内容
            success: function () {
              uni.hideToast({
                title: '复制成功，请打开百度网盘APP',
                duration: 2000,
                icon: 'none'
              })
            },
            fail: function () {
              uni.hideToast({
                title: '复制失败',
                duration: 2000,
                icon: 'none'
              })
            }
          })
        }
      })
    }
  },
  components: {
    SyVideo
  },
}
</script>

<style>
@import './css/process-child.css'
</style>