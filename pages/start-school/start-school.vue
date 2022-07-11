<!--
 * @Author: 初浩诚
 * @Date: 2022-06-27 19:33:52
 * @LastEditTime: 2022-07-11 21:07:51
 * @LastEditors: 初浩诚
 * @Description: 
 * @FilePath: /studentProject/pages/start-school/start-school.vue
 * 版权声明
-->
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
          <view class="sign-btn" @tap="goEnterSchool">立即填写 > </view>
        </view>
        <view class="school-content">
          <MangaList :classId="classId" :title="title"></MangaList>
          <view class="main-title">名人堂</view>
          <scroll-view class="scroll-content" scroll-x="true">
            <view class="scroll-item">
              <CelebrityList :excellentList="excellentList"></CelebrityList>
            </view>
          </scroll-view>
          <view class="main-title">公告</view>
          <Notice :noticeList="noticeList"></Notice>
        </view>
      </view>
    </scroll-view>
    <view class="pop" v-if="showPop">
      <view class="pop-mask"></view>
      <view class="pop-box">
        <view class="pop-content">
          <image class="close" @tap="closePop" src="../../static/imgs/close.png"></image>
          <image class="pop-btn" src="../../static/imgs/pop-btn.png"></image>
          <view class="btn-text" @tap="goEnterSchool">快速入学</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import MyHeader from '@/components/start-school/my-header/my-header.vue'
import MangaList from '@/components/start-school/manga-list/manga-list.vue'
import CelebrityList from '@/components/start-school/celebrity-list/celebrity-list.vue'
import Notice from '@/components/start-school/notice/notice.vue'
import {getExcellentList, getNoticeList} from '@/service/get-start-school.js'
export default {
  name: "start-school",
  data () {
    return {
      title: '',
      classId: '',
      showPop: true,
      pageNum: 1,
      pageSize: 10,
      excellentList: [],
      noticeList: []
    }
  },
  onLoad(options) {
    const item = JSON.parse(options.item)
    // 当前班级的名称
    this.title = item.className
    // 获取当前班级的id
    this.classId = item.id
    this.__init()
  },
  components: {
    MyHeader,
    MangaList,
    CelebrityList,
    Notice
  },
  methods: {
    closePop () {
      this.showPop = false
    },
    goEnterSchool () {
      uni.navigateTo({
        url: '../enter-school/enter-school'
      })
    },
    // 获取名人堂信息
    async __init () {
      const data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      const res = await getExcellentList(data)
      this.excellentList = res.slice(0, 3)
      this.noticeList = await getNoticeList(data)
    }
  }
}
</script>

<style scoped>
@import "./css/start-school.css";
</style>
