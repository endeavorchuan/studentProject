<!--
* @name: show-contract
* @author: chuanchuan
* @date: 2022-06-27 16:20
* @description: show-contract
* @update: 2022-06-27 16:20
-->

<template>
  <view class="show-contract">
    <view class="contract-header">
      <image class="image" src="https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/title.png"></image>
    </view>
    <scroll-view class="scroll-view" scroll-y="true">
      <view class="contract">
        <view class="show-contract-content">
          <view class="sign-item">
            <view class="sign-bg-title">
              <view class="item-title">实训室</view>
            </view>
            <view class="item-content">
              <view class="item-text">
                <rich-text>学习周期1个月</rich-text>
                <rich-text>学习周期1个月</rich-text>
                <rich-text>学习周期1个月</rich-text>
              </view>
            </view>
            <view class="sign-bg-footer">
              <rich-text>1234455</rich-text>
            </view>
          </view>
          <view class="sign-item">
            <view class="sign-bg-title">
              <view class="item-title">实训室</view>
            </view>
            <view class="item-content">
              <view class="item-text">
                <rich-text>学习周期1个月</rich-text>
                <rich-text>学习周期1个月</rich-text>
                <rich-text>学习周期1个月</rich-text>
              </view>
            </view>
            <view class="sign-bg-footer">
              <rich-text>1234455</rich-text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="know">
      <view class="contract-know">我知道了</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "show-contract"
}
</script>

<style scoped>
@import "./css/show-contract.css";
</style>
