<!--
* @name: manga-list
* @author: chuanchuan
* @date: 2022-06-28 11:05
* @description: manga-list
* @update: 2022-06-28 11:05
-->

<template>
  <view class="manga-list">
    <view class="list-item" @tap="goArchives">
      <image class="item-bg" src="../../../static/imgs/archives.png"></image>
      <view class="item-text">档案管理</view>
    </view>
    <view class="list-item">
      <image class="item-bg" :src="signList.imgUrl"></image>
      <view class="item-text">{{ signList.name }}</view>
    </view>
    <view class="list-item">
      <image class="item-bg" :src="mangaList.imgUrl"></image>
      <view class="item-text">{{ mangaList.name }}</view>
    </view>
    <view class="list-item" @tap="goHelp">
      <image class="item-bg" src="../../../static/imgs/service.png"></image>
      <view class="item-text">咨询帮助</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "manga-list",
  props: {
    classId:{
      type: String,
      default: 0
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      mangaList: {
        imgUrl: '/static/imgs/sign-out.png',
        name: '签署协议'
      },
      signList: {
        imgUrl: '/static/imgs/sign-in.png',
        name: '我的协议'
      }
    }
  },
  methods: {
    goHelp () {
      console.log('1')
      uni.navigateTo({
        url: '/pages/cnosulting-help/consulting-help'
      })
    },
    goArchives () {
      uni.navigateTo({
        url: '/pages/show-manage/show-manage?classId=' + this.classId
      })
    }
  }
}
</script>

<style scoped>
@import "./css/manga-list.css";
</style>
