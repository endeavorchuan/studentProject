<!--
* @name: my-contract
* @author: chuanchuan
* @date: 2022-06-27 11:04
* @description: my-contract
* @update: 2022-06-27 11:04
-->
<template>
	<view class="my-contract">
		<my-header class="home-header" :isBack="false" title="我的协议"></my-header>
		<scroll-view class="scroll-view" scroll-y="true" :style="'height:'+clientHeight+'px;'">
			<view class="contract-content" :style="'height:'+clientHeight+'px;'">
				<view class="contract" :style="'height:'+clientHeight+'px;'">
					<image class="contract-img" src="signInfo.classProtocolPath" lazy-load="true"></image>
					<view class="username">signInfo.studentName</view>
					<view class="idCard">signInfo.idCard</view>
					<view class="contract-time">signInfo.signTime</view>
					<view class="company-time">signInfo.signTime</view>

					<image src="signInfo.signProtocolPath" class="contract-sign"></image>
					<view class="idCard1">signInfo.idCard</view>
					<view class="contract-time1">signInfo.signTime</view>
					<view class="company-time1">signInfo.signTime</view>
					<image src="signInfo.signProtocolPath" class="contract-sign1"></image>
				</view>
			</view>
		</scroll-view>
		<my-tabbar :selected="selected"></my-tabbar>
	</view>
</template>

<script>
import MyHeader from '@/components/start-school/my-header/my-header.vue'
import MyTabbar from '@/components/tabbar/my-tabbar.vue'
import {mapState, mapActions} from 'vuex'
import {stuCurrent} from '@/service/sign.js'

export default {
  name: "my-contract",
  data() {
    return {
      selected: 3
    }
  },
  onLoad() {
    this.contractTime = uni.getStorageSync('signtime')
    this.__init()
  },
  computed: {
    ...mapState({
      userList: state => state.user.userList,
      signInfo: state => state.sign.signInfo,
      barHeight: state => state.bar.barHeight
    })
  },
  onReady() {
    uni.getSystemInfo({
      success: (res) => {
        this.clientHeight = res.windowHeight - 68 - res.statusBarHeight
      }
    })
  },
  methods: {
    ...mapActions(['addSignInfoActions']),
    async __init() {
      stuCurrent().then(res => {
        this.userList.status = 1
        res.classProtocolPath = res.classProtocolPath
        res.signProtocolPath = 'https://fawnuat.xuexiluxian.cn/api' + res.signProtocolPath
        this.addSignInfoActions(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  components: {
    MyTabbar,
    MyHeader
  }
}
</script>

<style scoped>
@import './css/my-contract.css'
</style>
