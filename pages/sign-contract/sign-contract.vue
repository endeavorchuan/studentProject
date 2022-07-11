<template>
  <view class="my-contract">
    <my-header title="签订协议"></my-header>
    <!-- 如果未签协议 就 展示 签订协议 -->
    <view>
      <scroll-view scroll-y="true">
        <view class="contract-content">
          <!-- v-if="contractImg" -->
          <view class="contract">
            <image
              class="contract-img"
              :src="contractImg"
              mode=""
              lazy-load="true"
            ></image>
            <view class="username">{{ userName }}</view>
            <view class="idCard">{{ idCard }}</view>
            <view class="contract-time">{{ contractTime }}</view>
            <view class="company-time">{{ contractTime }}</view>
            <image :src="selectedPath" class="contract-sign" mode=""></image>
            <view class="idCard1">{{ idCard }}</view>
            <view class="contract-time1">{{ contractTime }}</view>
            <view class="company-time1">{{ contractTime }}</view>
            <image :src="selectedPath" class="contract-sign1" mode=""></image>
          </view>
          <view class="contract-btn" @tap="goBack">确认签署</view>
        </view>
      </scroll-view>
    </view>

    <!-- tabbar -->
    <my-tabbar :selected="selected"></my-tabbar>

    <!-- 底部model -->
    <view class="pop" v-show="isShow">
      <view class="pop-mask" @tap="hidePop"></view>
      <view class="pop-box" :animation="animationData">
        <view class="pop-content">
          <view class="pop-tips"
            >* 请选择要使用的签名<text class="tips-active">(必选)</text></view
          >
          <view class="sign-title">签名列表</view>
          <view class="pop-list">
            <view
              class="pop-item"
              v-for="(item, index) in pathArr"
              :key="index"
              @tap="selectedImg(index)"
            >
              <image
                v-if="item.pathImg"
                class="sign-item"
                :src="item.pathImg"
                mode=""
              ></image>
              <image
                @tap="goSignin(index)"
                v-else
                class="item-img"
                src="../../static/imgs/add.png"
                mode=""
              ></image>
              <image
                v-if="item.isChecked"
                class="check-img"
                src="../../static/imgs/checkImg.png"
                mode=""
              >
              </image>
            </view>
          </view>
          <view class="pop-btn">
            <view class="cancel">取消</view>
            <view class="sign-sure cancel" @tap="signSure">生成协议</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import MyHeader from "@/components/start-school/my-header/my-header.vue";
import MyTabbar from "@/components/tabbar/my-tabbar.vue";
import { mapActions, mapState } from "vuex";
import { protocolInfo, signClassProtocol } from "@/service/sign.js";
import { getTime } from "@/utils/getTime.js";
export default {
  data() {
    return {
      userName: "",
      idCard: "",
      contractTime: "",
      ctx: "",
      imgHeight: 0,
      selected: 3,
      // 当前协议图片
      contractImg: "",
      // 当前协议的id
      contractId: 0,
      // 控制弹窗是否显示
      isShow: true,
      // 动画列表
      animationData: {},
      // 多张签名的数组
      pathArr: [
        {
          pathImg: "",
          isChecked: false,
        },
        {
          pathImg: "",
          isChecked: false,
        },
      ],
      // 点击了那个图片 去签名
      selectIndex: 0,
      // 选中那个签名作为 最终签名
      pathIndex: 0,
      // 签名的路径
      pathU: "",
      // 选中的签名路径
      selectedPath: "",
      // 协议的id
      protocolId: 0,
      // 班级id
      classId: 0,
    };
  },
  components: {
    MyHeader,
    MyTabbar,
  },
  mounted() {},
  onLoad() {
    this.__init();
    uni.$on("handWriting", (data) => {
      this.pathArr[this.selectIndex].pathImg = data.path;
    });
  },
  computed: {
    ...mapState({
      userList: (state) => state.user.userList,
      classInfo: (state) => state.classes.classInfo,
    }),
  },
  methods: {
    ...mapActions(["changeStatus"]),
    __init() {
      const classId = parseInt(this.userList.classId);
      protocolInfo({
        classId,
      })
        .then((res) => {
          console.log(res);
          const protocolPath = res.protocolPath;
          this.contractImg = protocolPath;
          this.protocolId = res.id;
          this.classId = res.classId;
          setTimeout(() => {
            if (this.classInfo.classId === res.classId) {
              this.userName = this.classInfo.name;
              this.idCard = this.classInfo.idCard;
              const time = getTime();
              this.contractTime = `${time.year} 年 ${time.month} 月 ${time.day} 日`;
            }
          }, 200);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 底部pop弹出动画
    shopPop() {
      let animation = uni.createAnimation({
        duration: 200,
      });
      animation.translateY(600).step();
      this.animationData = animation.export();
      this.isShow = true;
      setTimeout(() => {
        animation.translateY(0).step();
        this.animationData = animation.export();
      }, 200);
    },
    // 底部pop 消失动画
    hidePop() {
      let animation = uni.createAnimation({
        duration: 200,
      });
      animation.translateY(600).step();
      this.animationData = animation.export();
      setTimeout(() => {
        animation.translateY(0).step();
        this.isShow = false;
      }, 200);
    },

    // 去签名
    goSignin(index) {
      this.selectIndex = index;
      uni.navigateTo({
        url: "../sign-canvas/sign-canvas",
      });
    },
    // 选中的图片
    selectedImg(index) {
      if (this.pathArr[index].isChecked) {
        this.pathArr[index].isChecked = false;
        this.pathIndex = 0;
      } else {
        this.pathArr[index].isChecked = true;
        this.pathIndex = index;
      }
    },
    // 生成协议
    signSure() {
      // 选中的图片显示
      uni.showModal({
        title: "提示",
        content: "确认生成协议吗",
        success: (res) => {
          if (res.confirm) {
            this.selectedPath = this.pathArr[this.pathIndex].pathImg;
            this.isShow = false;
          } else if (res.cancel) {
            this.isShow = true;
          }
        },
      });
    },
    goBack() {
      if (this.selectedPath) {
        uni.showModal({
          title: "提示",
          content: "确认签署协议吗",
          success: (res) => {
            if (res.confirm) {
              uni.uploadFile({
                url: "https://fawnuat.xuexiluxian.cn/wechat/stuProtocol/signClassProtocol", //仅为示例，非真实的接口地址
                filePath: this.selectedPath,
                name: "file",
                header: {
                  "Content-Type": "multipart/form-data", // formdata提交格式
                  token: uni.getStorageSync("token"), // token验证
                },
                formData: {
                  classId: this.classId,
                  protocolId: this.protocolId,
                },
                success: (uploadFileRes) => {
                  // console.log(uploadFileRes);
                  const data = JSON.parse(uploadFileRes.data);

                  if (data.resultCode === 200) {
                    uni.showToast({
                      title: data.message,
                      icon: "none",
                    });
                    this.changeStatus({
                      status: 1,
                    });
                    uni.switchTab({
                      url: "../my-contract/my-contract",
                    });
                  } else if (data.resultcode !== 200) {
                    uni.showToast({
                      title: data.message,
                      icon: "none",
                    });
                  }
                },
                fail: (err) => {
                  console.log(err);
                },
              });
              // 改变vuex 中 status的状态
            } else if (res.cancel) {
              this.isShow = true;
              this.shopPop();
            }
          },
          fail: (err) => {
            console.log(err);
          },
        });
      } else {
        this.isShow = true;
        this.shopPop();
      }
    },
  },
};
</script>

<style scoped>
scroll-view ::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
}

.my-contract {
  width: 100vw;
  height: 7000rpx;
  background-color: #f0f3f7;
}

.contract-content {
  padding: 20rpx 35rpx;
  height: 6500rpx;
  height: 100%;
  box-sizing: border-box;
}

scroll-view {
  height: 100%;
  height: 6500rpx;
}

.contract {
  width: 682rpx;
  height: 6000rpx;
  border: 2rpx dashed #000;
  position: relative;
}

.canvasImg {
  width: 682rpx;
  border: 2rpx dashed #000;
}

.username {
  position: absolute;
  left: 150rpx;
  top: 220rpx;
}

.idCard {
  font-size: 20rpx;
  position: absolute;
  right: 20rpx;
  bottom: 2320rpx;
}

.idCard1 {
  font-size: 20rpx;
  position: absolute;
  right: 20rpx;
  bottom: 180rpx;
}

.contract-time {
  font-size: 20rpx;
  position: absolute;
  right: 60rpx;
  bottom: 2280rpx;
}

.company-time {
  font-size: 20rpx;
  position: absolute;
  left: 150rpx;
  bottom: 2280rpx;
}

.contract-time1 {
  font-size: 20rpx;
  position: absolute;
  right: 50rpx;
  bottom: 140rpx;
}

.company-time1 {
  font-size: 20rpx;
  position: absolute;
  left: 150rpx;
  bottom: 140rpx;
}

.contract-img {
  width: 682rpx;
  /* height: 100%; */
  height: 6000rpx;
}

/* 签名的图片显示的位置 */
.contract-sign {
  width: 200rpx;
  height: 150rpx;
  position: absolute;
  right: 100rpx;
  bottom: 2300rpx;
  transform: rotate(-90deg);
}

.contract-sign1 {
  width: 200rpx;
  height: 150rpx;
  position: absolute;
  right: 100rpx;
  bottom: 170rpx;
  transform: rotate(-90deg);
}

.contract-btn {
  width: 680rpx;
  height: 80rpx;
  line-height: 80rpx;
  background: #358cf8;
  text-align: center;
  border-radius: 20rpx;
  margin-top: 100rpx;
  color: #fff;
}

/* model */
.pop {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.pop-mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.pop-box {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 600rpx;
  background-color: #fff;
}

.pop-content {
  padding: 37rpx;
}

.pop-title {
  width: 506rpx;
  height: 31rpx;
  font-size: 30rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  line-height: 20rpx;
}

.tips-active {
  color: #0060ff;
}

.sign-title {
  width: 113rpx;
  height: 28rpx;
  font-size: 28rpx;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  line-height: 20rpx;
  padding: 60rpx 0;
}

.pop-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.pop-item {
  width: 325rpx;
  height: 211rpx;
  border: 2rpx solid #8b8b8b;
  border-radius: 10rpx;
  position: relative;
}

.item-img {
  width: 150rpx;
  height: 150rpx;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.sign-item {
  width: 200rpx;
  height: 200rpx;
  transform: rotate(-90deg);
  padding: 50rpx 0;
  position: absolute;
  top: -50rpx;
  left: 60rpx;
}

.check-img {
  width: 100rpx;
  height: 100rpx;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.pop-btn {
  display: flex;
  justify-content: space-around;
  padding-top: 50rpx;
}

.cancel {
  width: 310rpx;
  height: 80rpx;
  line-height: 80rpx;
  background: #5468ff;
  border-radius: 20rpx;
  text-align: center;
  color: #ffffff;
}

.sign-sure {
  background: #0060ff;
}
</style>
