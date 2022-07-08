<!--
* @name: interview-process
* @author: chuanchuan
* @date: 2022-06-27 11:04
* @description: interview-process
* @update: 2022-06-27 11:04
-->

<template>
  <view class="interview-process">
    <MyHeader title="面试求职流程" :backShow="false"></MyHeader>
    <view class="process">
      <view class="process-content">
        <ProcessItem :processList="processList"></ProcessItem>
      </view>
    </view>
    <MyTabbar :selected="selected"></MyTabbar>
  </view>
</template>

<script>
import MyHeader from '@/components/start-school/my-header/my-header.vue'
import MyTabbar from '@/components/tabbar/my-tabbar.vue'
import {getProcessList} from '@/service/process.js'
import ProcessItem from '@/components/interview-process/process-item/process-item.vue'

export default {
  name: "interview-process",
  data() {
    return {
      selected: 2,
      pageNum: 1,
      pageSize: 10,
      processList: []
    }
  },
  onLoad() {
    this.__init()
  },
  computed: {
    changeList() {
      this.processList.map(item => {
        item.interviewProcessAttrs.map(tem => {
          // 判断是否有视频
          if (tem.objType === 2) {    // objType===2 为视频
            item.isVideo = true
          } else {
            item.isVideo = false
          }
        })
      })
    }
  },
  components: {
    MyTabbar,
    MyHeader,
    ProcessItem
  },
  methods: {
    async __init() {
      const params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      const res = await getProcessList(params)
      console.log(res)
      this.processList = res
    }
  }
}
</script>

<style scoped>
@import './css/interview-process.css'
</style>
