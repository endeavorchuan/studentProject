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
        <view class="tabbar-list-li" v-for="(item, index) in tabBar.list" :key="index" @click="setSelected(index)">
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
          pagePath: '/pages/index/index',
          iconPath: '/static/tabbar/home.png',
          selectedIconPath: '/static/tabbar/home-selected.png',
          text: '首页'
        }, {
          pagePath: '/pages/interview-question/interview-question',
          iconPath: '/static/tabbar/question.png',
          selectedIconPath: '/static/tabbar/question-selected.png',
          text: '刷面试题'
        }, {
          pagePath: '/pages/interview-process/interview-process',
          iconPath: '/static/tabbar/process.png',
          selectedIconPath: '/static/tabbar/process-selected.png',
          text: '面试流程'
        }, {
          pagePath: '/pages/my-contract/my-contract',
          iconPath: '/static/tabbar/contract.png',
          selectedIconPath: '/static/tabbar/contract-selected.png',
          text: '我的协议'
        }, {
          pagePath: '/pages/my-card/my-card',
          iconPath: '/static/tabbar/card.png',
          selectedIconPath: '/static/tabbar/my-selected.png',
          text: '我的名片'
        }]
      }
    }
  },
  methods: {
    setSelected (index) {
      uni.switchTab({
        url: this.tabBar.list[index].pagePath
      })
    }
  },
  name: "my-tabbar"
}
</script>

<style scoped>
@import "./css/my-tabbar.css";
</style>
