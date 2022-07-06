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
  props: {
    homeData: {
      type: Array,
      default: []
    }
  },
  data() {
    return {

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
