<!--
* @name: my-tabbar
* @author: chuanchuan
* @date: 2022-06-27 11:11
* @description: my-tabbar
* @update: 2022-06-27 11:11
-->

<template>
  <view class="tabbar">
    <view class="tabbar-list">
      <view class="tabbar-list-ul">
        <view class="tabbar-list-li" v-for="(item, index) in tabBar.list" :key="index">
          <view class="tabbar-list-li-icon">
            <image class="tabbar-list-li-icon-image" :src="selected === index ? item.selectedIconPath : item.iconPath"></image>
          </view>
          <view :class="selected === index ? 'tabbar-list-li-name active' : 'tabbar-list-li-name'">{{ item.text }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['selected'],
  data() {
    return {
      tabBar: {
        list: [{
          iconPath: '/static/tabbar/home.png',
          selectedIconPath: '/static/tabbar/home-selected.png',
          text: '首页'
        }, {
          iconPath: '/static/tabbar/question.png',
          selectedIconPath: '/static/tabbar/question-selected.png',
          text: '刷面试题'
        }, {
          iconPath: '/static/tabbar/process.png',
          selectedIconPath: '/static/tabbar/process-selected.png',
          text: '面试流程'
        }, {
          iconPath: '/static/tabbar/contract.png',
          selectedIconPath: '/static/tabbar/contract-selected.png',
          text: '我的协议'
        }, {
          iconPath: '/static/tabbar/card.png',
          selectedIconPath: '/static/tabbar/my-selected.png',
          text: '我的名片'
        }]
      }
    }
  },
  name: "my-tabbar"
}
</script>

<style scoped>
@import "./css/my-tabbar.css";
</style>
