<!--
 * @Author: 初浩诚
 * @Date: 2022-07-07 15:27:51
 * @LastEditTime: 2022-07-08 15:05:01
 * @LastEditors: 初浩诚
 * @Description: 
 * @FilePath: /studentProject/pages/subject/subject.vue
 * 版权声明
-->
<template>
  <view class="subject">
    <MyHeader title="刷题"></MyHeader>
    <view class="subject-content">
      <view class="subject-common">
        <view class="dots">
          <text>1/20</text>
        </view>
        <swiper class="swiper" :style="'height:'+clientHeight+'px;'">
          <swiper-item v-for="(item, index) in toSwiper" :key="index">
            <scroll-view class="scroll-view" scroll-y="true" :style="'height:'+clientHeight+'px;'">
              <SubjectItem :item="item"></SubjectItem>
            </scroll-view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <view class="subject-check">
      <view class="last">上一题</view>
      <view class="next">下一题</view>
    </view>
  </view>
</template>

<script>
import MyHeader from '@/components/start-school/my-header/my-header.vue'
import SubjectItem from '@/components/interview-question/subject-item/subject-item.vue'
import { getQuestionList } from '@/service/question'

export default {
  components: {
    MyHeader,
    SubjectItem
  },
  data() {
    return {
      clientHeight: 0,
      typeId: 0,
      toSwiper: []
    }
  },
  onReady() {
    uni.getSystemInfo({
      success: (res) => {
        this.clientHeight = res.windowHeight - this.getClientHeight()
        // 获取计数高度
        let dots = uni.createSelectorQuery().in(this).select(".dots")
        dots.boundingClientRect((data) => {
          // data包含元素的高度信息
          // data.height 是头部的高度，68是tabbar的高度
          this.clientHeight = this.clientHeight - data.height
        }).exec(function (res){
          // 这个方法必须执行，即使什么也不做，否则不会获取到信息
        })
        // 获取底部切换的高度
        let info = uni.createSelectorQuery().in(this).select(".subject-check")
        info.boundingClientRect((data) => {
          // data包含元素的高度信息
          // data.height 是头部的高度，68是tabbar的高度
          this.clientHeight = this.clientHeight - data.height
        }).exec(function (res){
          // 这个方法必须执行，即使什么也不做，否则不会获取到信息
        })
      }
    })
  },
  onLoad(options) {
    // 获取类型id
    this.typeId = options.typeId
    this.__init()
  },
  methods: {
    // 获取可视区域的高度
    getClientHeight () {
      const res = uni.getSystemInfoSync()
      return res.statusBarHeight
    },
    // 获取面试题数据
    async __init () {
      const data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        typeId: this.typeId
      }
      const res = await getQuestionList(data)
      this.toSwiper.push(...res)
      console.log(this.toSwiper)
    }
  },
} 
</script>

<style scoped>
@import './css/subject.css'
</style>