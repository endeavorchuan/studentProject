<!--
* @name: my-card
* @author: chuanchuan
* @date: 2022-06-27 11:04
* @description: my-card
* @update: 2022-06-27 11:04
-->

<template>
  <view class="my-card">
    <view class="my-header">
      <!-- 自定义头部 -->
      <my-header :isBack="false" hasBgc="transparent" title="我的名片" color="#fff"></my-header>
      <view class="header-main">
        <view class="main-content">
          <image class="main-img" :src="avatarUrl"></image>
          <view class="main">
            <view class="login" v-if="isLogin" style="position:relative; z-index:999;">
              <view @tap="goLogin" class="header-name">授权登陆</view>
            </view>
            <view class="header-name" v-else>{{ nickName }}</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 内容区 -->
    <view class="card-content">
      <view class="card-item" @tap="goCard" :myInfo="myInfo">
        <image class="item-img" src="../../static/imgs/my-card.png"></image>
        <view class="item-card">名片</view>
      </view>
      <view class="card-item" @tap="goMess" :myInfo="myInfo">
        <image class="item-img1" src="../../static/imgs/news.png"></image>
        <view class="item-card">消息</view>
      </view>
      <view class="card-item" @tap="goHelp" :myInfo="myInfo">
        <image class="item-img2" src="../../static/imgs/customer.png"></image>
        <view class="item-card">客服及帮助</view>
      </view>
    </view>
    <my-tabbar :selected="selected"></my-tabbar>
    <view class="mask" v-if="isLogin"></view>
  </view>
</template>

<script>
import MyTabbar from '@/components/tabbar/my-tabbar.vue'
import MyHeader from '@/components/start-school/my-header/my-header.vue'
export default {
  name: "my-card",
  data() {
    return {
      selected: 4,
      myInfo: null,
      params: {},
      isLogin: true,
      avatarUrl: '../../static/imgs/weidenglu.png',
      nickName: '川川'
    }
  },
  components: {
    MyTabbar,
    MyHeader
  }
}
</script>

<style scoped>
@import './css/my-card.css'
</style>
