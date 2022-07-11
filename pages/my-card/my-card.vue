<!--
* @name: my-card
* @author: chuanchuan
* @date: 2022-06-27 11:04
* @description: my-card
* @update: 2022-06-27 11:04
-->

<template>
  <view class="my-card">
    <view class="my-header">
      <!-- 自定义头部 -->
      <my-header :isBack="false" hasBgc="transparent" title="我的名片" color="#fff"></my-header>
      <view class="header-main">
        <view class="main-content">
          <image class="main-img" :src="avatarUrl"></image>
          <view class="main">
            <view class="login" v-if="isLogin" style="position:relative; z-index:999;">
              <view @tap="goLogin" class="header-name">授权登录</view>
            </view>
            <view class="header-name" v-else>{{ nickName }}</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 内容区 -->
    <view class="card-content">
      <view class="card-item" @tap="goCard" :myInfo="myInfo">
        <image class="item-img" src="../../static/imgs/my-card.png"></image>
        <view class="item-card">名片</view>
      </view>
      <view class="card-item" @tap="goMess" :myInfo="myInfo">
        <image class="item-img1" src="../../static/imgs/news.png"></image>
        <view class="item-card">消息</view>
      </view>
      <view class="card-item" @tap="goHelp" :myInfo="myInfo">
        <image class="item-img2" src="../../static/imgs/customer.png"></image>
        <view class="item-card">客服及帮助</view>
      </view>
    </view>
    <my-tabbar :selected="selected"></my-tabbar>
    <view class="mask" v-if="isLogin"></view>
  </view>
</template>

<script>
import MyTabbar from '@/components/tabbar/my-tabbar.vue'
import MyHeader from '@/components/start-school/my-header/my-header.vue'
import {authLogin} from '@/service/login.js'
import {stuCurrent} from '@/service/sign.js'
import {stuInfo} from '@/service/student.js'
import {mapState, mapActions} from 'vuex'

export default {
  name: "my-card",
  data() {
    return {
      selected: 4,
      myInfo: null,
      params: {},
      isLogin: true,
      avatarUrl: '../../static/imgs/weidenglu.png',
      nickName: '川川'
    }
  },
  components: {
    MyTabbar,
    MyHeader
  },
  onShow() {
    this.getStu()
  },
  computed: {
    ...mapState({
      signInfo: state => state.sign.signInfo,
      userList: state => state.user.userList,
      student: state => state.user.student
    })
  },
  methods: {
    ...mapActions(['changeOpenIdActions', 'changeStatus', 'addSignInfoActions', 'changeStudentActions']),
    getStu() {
      if (uni.getStorageSync('token')) {
        // 获取入学的学生信息
        stuInfo().then(res => {
          console.log(res)
          if (!res.name)
            return
          this.myInfo = res
          this.changeStudentActions(res)
        }).catch(err => {
          console.log(err, '错误')
        })
      }
    },
    getUser() {
      if (wx.getUserProfile) {
        wx.getUserProfile({
          desc: '用于获取名片展示用户头像和昵称',
          lang: 'zh_CN',
          success: userData => {
            this.nickName = userData.userInfo.nickName
            this.params.nickName = userData.userInfo.nickName
            this.avatarUrl = userData.userInfo.avatarUrl
            this.params.avatarUrl = userData.userInfo.avatarUrl
            this.login()
          },
          fail: err => {
            this.isLogin = false
          }
        })
      } else {
        wx.getUserInfo({
          success: res => {
            this.nickName = res.userInfo.nickName
            this.params.nickName = res.userInfo.nickName
            this.avatarUrl = res.userInfo.avatarUrl
            this.params.avatarUrl = res.userInfo.avatarUrl
            this.login()
          }
        })
      }
    },
    login() {
      uni.login({
        provider:'weixin',
        success: loginRes => {
          authLogin({
            code: loginRes.code
          }).then(res => {
            this.params.openId = res.openId
            // 把openId保存到vuex
            this.changeOpenIdActions(this.params)
            // 存储token到本地
            uni.setStorageSync('token', res.token)
            // 获取学生信息
            this.getStu()
            // 获取学生协议信息
            stuCurrent().then(res => {
              if (res.resultCode === 1020)
                return
              res.classProtocolPath = res.classProtocolPath
              res.signProtocolPath = 'https://fawnuat.xuexiluxian.cn/api' + res.signProtocolPath
              this.addSignInfoActions(res)
              // 改变状态
              this.changeStatus({status: 1})
            }).catch(err => {
              console.log(err)
            })
            uni.showToast({
              title: '登录成功',
              icon: 'none'
            })
          })
        },
        fail() {
          uni.showToast({
            title: '登录失败，请手动登陆',
            })
        }
      })
    },
    goLogin() {
      if (this.isLogin) {
        this.getUser()
        this.isLogin = false
      }
    },
    goCard() {
      if (this.myInfo) {
        uni.navigateTo({
          url: '/pages/my/my'
        })
      } else {
        uni.showToast({
          title: '请先入学',
          icon: 'none'
        })
      }
    },
    goMess() {
      uni.showToast({
        title: '该功能暂不开放',
        icon: 'none'
      })
    },
    goHelp() {
      uni.navigateTo({
        url: '/pages/cnosulting-help/consulting-help'
      })
    }
  }
}
</script>

<style scoped>
@import './css/my-card.css'
</style>
