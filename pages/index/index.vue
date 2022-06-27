<template>
	<view class="home">
    <view class="home-container">
      <view class="home-header">
        <view class="home-title">前端学院</view>
        <view class="home-school">入学信息入口</view>
        <view class="home-show">
          <view class="home-class">
            <text class="show-text">查看班级权益</text>
          </view>
          <image class="home-img" src="../../static/imgs/shape.png"></image>
        </view>
      </view>
      <scroll-view scroll-y="true">
        <view class="home-content">
          <HomeCommodity></HomeCommodity>
        </view>
      </scroll-view>
    </view>
    <MyTabbar :selected="selected"></MyTabbar>
	</view>
</template>

<script>
  import MyTabbar from '@/components/tabbar/my-tabbar.vue'
  import HomeCommodity from '@/components/index/HomeCommodity/HomeCommodity.vue'
	export default {
    components: {
      MyTabbar,
      HomeCommodity
    },
		data() {
			return {
        selected: 0
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
@import './css/index.css';
</style>
