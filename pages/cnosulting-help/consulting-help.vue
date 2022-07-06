<template>
  <view class="cosulting-help">
    <MyHeader title="咨询帮助"></MyHeader>
    <view class="help-content" v-if="dataList">
      <view class="help-item" v-for="item in dataList" :key="item.id">
        <image class="image-address" src="../../static/imgs/address.png"></image>
        <view class="item-main">
          <view class="main-title">{{ item.name }}</view>
          <view class="main-phone">{{ item.phone }}</view>
        </view>
        <image class="image-phone" src="../../static/imgs/phone.png"></image>
      </view>
    </view>
    <view class="help-content" v-else>暂无数据...</view>
    <view class="help-sure">确认</view>
  </view>
</template>

<script>
import MyHeader from '@/components/start-school/my-header/my-header.vue'
import {getHelpList} from '@/service/help.js'

export default {
  data() {
    return {
      dataList: [],
      pageNum: 1,
      pageSize: 10
    }
  },
  components: {
    MyHeader
  },
  onLoad() {
    this.__init()
  },
  methods: {
    async __init () {
      const data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      const res = await getHelpList(data)
      this.dataList = res
    }
  }
} 
</script>

<style scoped>
@import './css/consulting.css'
</style>