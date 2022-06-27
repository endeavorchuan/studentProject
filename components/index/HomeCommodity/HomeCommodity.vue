<!--
* @name: HomeCommodity
* @author: chuanchuan
* @date: 2022-06-27 14:37
* @description: HomeCommodity
* @update: 2022-06-27 14:37
-->

<template>
  <view class="home-commodity">
    <block v-for="(item, index) in homeData" :key="index">
      <HomeItem :item="item"></HomeItem>
    </block>
  </view>
</template>

<script>
import HomeItem from '@/components/index/HomeItem/HomeItem.vue'
export default {
  name: "HomeCommodity",
  data() {
    return {
      homeData: [{
        classImgLink: 'https://test.cloudapprod.com/api/profile/wechat/bgimg/p4.png',
        className: '实训室'
      }, {
        classImgLink: 'https://test.cloudapprod.com/api/profile/wechat/bgimg/p4.png',
        className: 'P4'
      }, {
        classImgLink: 'https://test.cloudapprod.com/api/profile/wechat/bgimg/p4.png',
        className: 'P5'
      }, {
        classImgLink: 'https://test.cloudapprod.com/api/profile/wechat/bgimg/p4.png',
        className: '全日班'
      }, {
        classImgLink: 'https://test.cloudapprod.com/api/profile/wechat/bgimg/p4.png',
        className: '线下班'
      }]
    }
  },
  components: {
    HomeItem
  }
}
</script>

<style scoped>
@import "./css/HomeCommodity.css";
</style>
