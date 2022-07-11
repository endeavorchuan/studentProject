/**
 * @name: start-school
 * @author: chuanchuan
 * @date: 2022-07-11 15:52
 * @description：获取学员信息
 * @update: 2022-07-11 15:52
 */

import $http from './request.js'

export const stuInfo = () => {
  return $http.request({
    url: '/wechat/student/info',
    method: 'GET',
    header: {
      'token': uni.getStorageSync('token')
    }
  })
}