<!--
* @name: show-contract
* @author: chuanchuan
* @date: 2022-06-27 16:20
* @description: show-contract
* @update: 2022-06-27 16:20
-->

<template>
  <view class="show-contract">
    <view class="contract-header">
      <image class="image" src="https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/title.png"></image>
    </view>
    <scroll-view class="scroll-view" scroll-y="true" :style="'height: '+clientHeight+'px;'">
      <view class="contract" :style="'height: '+clientHeight+'px;'">
        <view class="show-contract-content">

          <view class="sign-item" v-for="item in classInfo" :key="item.id">
            <view class="sign-bg-title">
              <view class="item-title">{{ item.className }}</view>
            </view>
            <view class="item-content">
              <view class="item-text">
                <rich-text :nodes="item.classDesc"></rich-text>
              </view>
            </view>
            <view class="sign-bg-footer">
            </view>
          </view>

        </view>
      </view>
    </scroll-view>
    <view class="know">
      <view class="contract-know" @tap="goBack">我知道了</view>
    </view>
  </view>
</template>

<script>
import {getClassList} from "../../service/class.js";

export default {
  name: "show-contract",
  data() {
    return {
      clientHeight: null,
      classInfo: null
    }
  },
  onReady() {
    uni.getSystemInfo({
      success: (res) => {
        // 获取头部的高度，select里面的参数如css选择器一样选择元素
        let info = uni.createSelectorQuery().in(this).select(".contract-header")
        info.boundingClientRect((data) => {
          // data包含元素的高度信息
          // data.height 是头部的高度
          this.clientHeight = res.windowHeight - data.height
        }).exec(function (res){
          // 这个方法必须执行，即使什么也不做，否则不会获取到信息
        })
        // 获取"我知道了"的高度
        let know = uni.createSelectorQuery().in(this).select(".know")
        know.boundingClientRect((data) => {
          // data包含元素的高度信息
          // data.height 是头部的高度，68是tabbar的高度
          this.clientHeight = this.clientHeight - data.height
        }).exec(function (res){
          // 这个方法必须执行，即使什么也不做，否则不会获取到信息
        })
      }
    })
  },
  onLoad() {
    this.__init()
  },
  methods: {
    // 请求数据
    async __init() {
      const data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      const res = await getClassList(data)
      this.classInfo = res.slice(0, 5)
    },
    goBack () {
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style scoped>
@import "./css/show-contract.css";
</style>
