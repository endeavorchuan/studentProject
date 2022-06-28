<!--
* @name: start-school
* @author: chuanchuan
* @date: 2022-06-27 19:33
* @description: start-school
* @update: 2022-06-27 19:33
-->

<template>
  <view class="start-school">
    <MyHeader :title="title"></MyHeader>
    <scroll-view class="scroll-view" scroll-y="true">
      <view>
        <view class="banner-bg">
          <view class="sign-btn">立即填写 > </view>
        </view>
        <view class="school-content">
          <MangaList></MangaList>
          <view class="main-title">名人堂</view>
          <scroll-view class="scroll-content" scroll-x="true">
            <view class="scroll-item">
              <CelebrityList></CelebrityList>
            </view>
          </scroll-view>
          <view class="main-title">公告</view>
          <Notice></Notice>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
import MyHeader from '@/components/start-school/my-header/my-header.vue'
import MangaList from '@/components/start-school/manga-list/manga-list.vue'
import CelebrityList from '@/components/start-school/celebrity-list/celebrity-list.vue'
import Notice from '@/components/start-school/notice/notice.vue'
export default {
  name: "start-school",
  data () {
    return {
      title: ''
    }
  },
  onLoad(options) {
    const item = JSON.parse(options.item)
    this.title = item.className
  },
  components: {
    MyHeader,
    MangaList,
    CelebrityList,
    Notice
  }
}
</script>

<style scoped>
@import "./css/start-school.css";
</style>
