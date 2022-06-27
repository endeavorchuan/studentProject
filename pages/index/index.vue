<template>
	<view class="content">
    <view class="home-container">
      <view class="home-header">
        <view class="home-title">前端学院</view>
        <view class="home-school">入学信息入口</view>
        <view class="home-show">
          <view class="home-class">
            <text class="show-text">查看班级权益</text>
            <image class="home-img" src="../../static/imgs/shape.png"></image>
          </view>
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
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
