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

export const protocolInfo = ({classId}) => {
  return $http.request({
    url:'/wechat/protocol/info/'+classId,
    method: 'GET',
    header:{
      "token": uni.getStorageSync('token')
    }
  })
}

// 签署班级协议
// /wechat/stuProtocol/signClassProtocol
export const signClassProtocol = (data) => {
  return $http.request({
    url:'/wechat/stuProtocol/signClassProtocol',
    method: 'POST',
    header:{
      "Content-Type": "multipart/form-data",
      "token": uni.getStorageSync('token')
    },
    data: {
      ...data
    }
  })
}

// 查询已签署的班级协议 
export const stuProtocolInfo = ({classId}) => {
  return $http.request({
    url:'/wechat/stuProtocol/info/'+classId,
    method: 'GET',
    header:{
      "token": uni.getStorageSync('token')
    }
  })
}
