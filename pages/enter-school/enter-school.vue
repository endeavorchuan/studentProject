<!--
* @name: enter-school
* @author: chuanchuan
* @date: 2022-06-29 14:53
* @description: enter-school
* @update: 2022-06-29 14:53
-->

<template>
  <view class="enter-school">
    <MyHeader title="填写入学信息"></MyHeader>
    <image class="enter-banner" src="https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/enter-banner.png"></image>
    <form action="">
      <view class="manage-form">
        <view class="manage-item clear-line">
          <view class="item-title">姓名</view>
          <view class="item-main">
            <input type="text" name="name" placeholder="请填写姓名">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title"></view>
          <view class="item-main sex-item">
            <radio-group name="gender" class="item-main sex-item">
              <label>
                <radio :value="1" color="#0066ff" />女士
              </label>
              <label>
                <radio :value="0" color="#0066ff" />先生
              </label>
            </radio-group>
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">入学码</view>
          <view class="item-main">
            <input type="text" name="admissionCode" placeholder="请填写入学码（通过顾问获取）">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">身份证号码</view>
          <view class="item-main">
            <input type="idCard" name="idCard" placeholder="请填写身份证号码">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">手机号</view>
          <view class="item-main">
            <input type="number" name="phone" placeholder="请填写手机号">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">前端阶段</view>
          <view class="item-main">
            <input type="text" name="frontStage" placeholder="请填写前端阶段">
          </view>
        </view>
        <view class="manage-item address">
          <view class="address-title">
            <view class="item-title">家庭住址</view>
            <Kregion class="item-local" width="400" height="40"></Kregion>
          </view>
          <view class="address-main">
            <input type="text" name="addressInfo" placeholder="详细地址：如道路、门牌号、小区、楼栋号、单元楼等">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">出生日期</view>
          <view class="item-main">
            <input type="text" name="birthDate" placeholder="填写格式：xxxx-xx-xx">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">学历</view>
          <view class="item-main">
            <input type="text" name="education" placeholder="请填写学历">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">专业</view>
          <view class="item-main">
            <input type="text" name="major" placeholder="请填写专业">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">微信号</view>
          <view class="item-main">
            <input type="text" name="weChat" placeholder="请填写微信号">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">QQ号</view>
          <view class="item-main">
            <input type="text" name="qq" placeholder="请填写QQ号">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">目前状态</view>
          <view class="item-main">
            <input type="text" name="currentState" placeholder="在职、待业、就读">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">目标就业城市</view>
          <view class="item-main">
            <input type="text" name="city" placeholder="请填写目标就业城市">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">紧急联系人</view>
          <view class="item-main">
            <input type="text" name="emergencyContact" placeholder="请填写紧急联系人">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">紧急联系人电话</view>
          <view class="item-main">
            <input type="text" name="emergencyPhone" placeholder="请填写紧急联系人电话">
          </view>
        </view>
        <view class="manage-item">
          <view class="item-title">顾问</view>
          <view class="item-main">
            <input type="text" name="teacher" placeholder="请填写顾问">
          </view>
        </view>
      </view>
      <view class="manage-btn">
        <button class="btn-sure" form-type="submit">提交</button>
      </view>
    </form>
  </view>
</template>

<script>
import MyHeader from '@/components/start-school/my-header/my-header.vue'
export default {
  name: "enter-school",
  components: {
    MyHeader
  }
}
</script>

<style scoped>

</style>
