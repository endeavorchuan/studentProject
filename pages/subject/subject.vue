<!--
 * @Author: 初浩诚
 * @Date: 2022-07-07 15:27:51
 * @LastEditTime: 2022-07-08 18:04:12
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
          <text>{{ topSwiperIndex+1 }}/{{ totalNum }}</text>
        </view>
        <swiper :current="topSwiperIndex" @change="toSwiperTab" class="swiper" :style="'height:'+clientHeight+'px;'">
          <swiper-item v-for="(item, index) in toSwiper" :key="index">
            <scroll-view class="scroll-view" scroll-y="true" :style="'height:'+clientHeight+'px;'">
              <SubjectItem :item="item" :index="topSwiperIndex"></SubjectItem>
            </scroll-view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <view class="subject-check">
      <view @tap="goBefore" class="last">上一题</view>
      <view @tap="goNext" class="next">下一题</view>
    </view>
  </view>
</template>

<script>
import MyHeader from '@/components/start-school/my-header/my-header.vue'
import SubjectItem from '@/components/interview-question/subject-item/subject-item.vue'
import { getQuestionList, getQuestionNum } from '@/service/question.js'

export default {
  components: {
    MyHeader,
    SubjectItem
  },
  data() {
    return {
      clientHeight: 0,
      typeId: 0,
      toSwiper: [],
      totalNum: 0,
      topSwiperIndex: 0,
      currentNum: 0,
      pageSize: 10,
      pageNum: 1
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
    this.getTotal()
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
      this.currentNum += res.length
      this.toSwiper.push(...res)
      console.log(res)
    },
    // 获取面试题总条数
    async getTotal () {
      const data = {
        typeId: this.typeId
      }
      const res = await getQuestionNum(data)
      this.totalNum = res.questionNum
    },
    // 滑动轮播触发改变
    toSwiperTab (e) {
      this.topSwiperIndex = Number(e.target.current)
      const current = this.topSwiperIndex + 1
      if (current === this.currentNum - 1) {
        // 继续请求
        this.continueReq()
      } else if (current === this.totalNum) {
        uni.showToast({
          title: '等待更新',
          icon: 'none'
        })
      }
      return
    },
    // 继续请求数据
    continueReq () {
      this.pageNum += 1
      if (this.totalNum === this.toSwiper.length)
        return
      this.__init()
    },
    // 上一题按钮
    goBefore () {
      if (this.topSwiperIndex === 0) {
        uni.showToast({
          title: '已经是第一题了',
          icon: 'none'
        })
        return
      }
      this.topSwiperIndex -= 1
    },
    // 下一题按钮
    goNext () {
      if (this.topSwiperIndex === this.totalNum - 1) {
        uni.showToast({
          title: '已经是最后一题了',
          icon: 'none'
        })
        return
      } else {
        this.topSwiperIndex += 1
        if (this.topSwiperIndex === this.toSwiper.length - 1) {
          this.continueReq()
        }
      }
    }
  },
} 
</script>

<style scoped>
@import './css/subject.css'
</style>