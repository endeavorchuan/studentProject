/**
 * @name: start-school
 * @author: chuanchuan
 * @date: 2022-07-11 15:52
 * @description：学院协议信息
 * @update: 2022-07-11 15:52
 */

import $http from './request.js'

export const stuCurrent = () => {
  return $http.request({
    url: '/wechat/stuProtocol/current',
    method: 'GET',
    header: {
      'token': uni.getStorageSync('token')
    }
  })
}