/**
 * @name: request
 * @author: chuanchuan
 * @date: 2022-07-04 11:51
 * @description：请求文件封装
 * @update: 2022-07-04 11:51
 */

export default {
  common: {   // 默认参数
    baseUrl: 'https://fawnuat.xuexiluxian.cn',
    data: {},
    header: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded"
    },
    method: 'GET',
    dataType: 'json',
  },
  request (options = {}) {
    options.url = this.common.baseUrl + options.url
    options.data = options.data || this.common.data
    options.header = options.header || this.common.header
    options.dataType = options.dataType || this.common.dataType
    return new Promise((res, rej) => {    // 正式发送请求
      uni.showLoading({
        title: '加载中...'
      })
      uni.request({
        ...options,
        success: (result) => {
          if (result.data.resultCode !== 200) {
            setTimeout(function () {
              uni.hideLoading()
            }, 300)
          }
          setTimeout(function () {
            uni.hideLoading()
          }, 300)
          let data = result.data.data
          if (data) {   // 判断里面是否还嵌套了一层
            res(data)
          } else {
            res(result.data)
          }
        }
      })
    })
  }
}
