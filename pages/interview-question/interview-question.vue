<!--
* @name: interview-question
* @author: chuanchuan
* @date: 2022-06-27 11:01
* @description: interview-question
* @update: 2022-06-27 11:01
-->

<template>
  <view class="interview-question">
    <MyHeader title="面试题" :backShow="false"></MyHeader>

    <view class="question-content">
      <!-- 搜索区域 -->
      <view class="question-header">
        <input class="question-input" type="text" placeholder="请输入搜索的关键字" />
        <image class="question-search" src="../../static/imgs/search.png"></image>
      </view>
      <!-- 主区域 -->
      <scroll-view class="scroll-view" scroll-y="true" :style="'height:'+clientHeight+'px;'">
        <view class="commidty" :style="'height:'+clientHeight+'px;'">
          <QuestionCommidty :dataList="dataList"></QuestionCommidty>
        </view>
      </scroll-view>
    </view>

    <MyTabbar :selected="selected"></MyTabbar>
  </view>
</template>

<script>
import MyHeader from '@/components/start-school/my-header/my-header'
import MyTabbar from '@/components/tabbar/my-tabbar.vue'
import QuestionCommidty from '@/components/interview-question/question-commidty/question-commidty.vue'
import {getQuestionTypeList} from '@/service/question.js'

export default {
  name: "interview-question",
  data() {
    return {
      selected: 1,
      clientHeight: null,
      pageNum: 1,
      pageSize: 10,
      dataList: []
    }
  },
  onLoad() {
    this.__init()
  },
  onReady() {
    uni.getSystemInfo({
        success: (res) => {
          // 获取头部的高度，select里面的参数如css选择器一样选择元素
          let info = uni.createSelectorQuery().in(this).select(".question-header")
          info.boundingClientRect((data) => {
            // data包含元素的高度信息
            // data.height 是头部的高度，68是tabbar的高度
            this.clientHeight = res.windowHeight - data.height - 68 - 80
          }).exec(function (res){
            // 这个方法必须执行，即使什么也不做，否则不会获取到信息
          })
        }
      })
  },
  methods: {
    async __init () {
      const data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize 
      }
      const res = await getQuestionTypeList(data)
      this.dataList = res.slice(0, 9)
    }
  },
  components: {
    MyHeader,
    MyTabbar,
    QuestionCommidty
  }
}
</script>

<style scoped>
@import './css/interview-question.css';
</style>
