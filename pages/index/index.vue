<template>
	<view class="home">
    <view class="home-container">
      <view class="home-header">
        <view class="home-title">前端学院</view>
        <view class="home-school">入学信息入口</view>
        <view class="home-show" @tap="goShowContract">
          <view class="home-class">
            <text class="show-text">查看班级权益</text>
          </view>
          <image class="home-img" src="../../static/imgs/shape.png"></image>
        </view>
      </view>
      <scroll-view class="scroll-view" scroll-y="true" :style="'height: '+clientHeight+'px;'">
        <view class="home-content" :style="'height: '+clientHeight+'px;'">
          <HomeCommodity :homeData="homeData"></HomeCommodity>
        </view>
      </scroll-view>
    </view>
    <MyTabbar :selected="selected"></MyTabbar>
	</view>
</template>

<script>
  import MyTabbar from '@/components/tabbar/my-tabbar.vue'
  import HomeCommodity from '@/components/index/HomeCommodity/HomeCommodity.vue'
  import {getClassList} from "../../service/class";

  export default {
    components: {
      MyTabbar,
      HomeCommodity
    },
		data() {
			return {
        selected: 0,
        clientHeight: null,
        homeData: []
			}
		},
		onLoad() {
      // 获取班级信息列表
      this.__init()
		},
    onReady() {
      uni.getSystemInfo({
        success: (res) => {
          // 获取头部的高度，select里面的参数如css选择器一样选择元素
          let info = uni.createSelectorQuery().in(this).select(".home-header")
          info.boundingClientRect((data) => {
            // data包含元素的高度信息
            // data.height 是头部的高度，68是tabbar的高度
            this.clientHeight = res.windowHeight - data.height - 68
          }).exec(function (res){
            // 这个方法必须执行，即使什么也不做，否则不会获取到信息
          })
        }
      })
    },
		methods: {
      goShowContract() {
        uni.navigateTo({
          url: '../show-contract/show-contract'
        })
      },
      async __init () {
        const data = {
          pageNum: 1,
          pageSize: 10
        }
        const res = await getClassList(data)
        this.homeData = res.slice(0, 5)
      }
		}
	}
</script>

<style>
@import './css/index.css';
</style>
