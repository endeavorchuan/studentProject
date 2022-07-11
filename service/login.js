/**
 * @name: start-school
 * @author: chuanchuan
 * @date: 2022-07-11 15:52
 * @description：登陆接口信息
 * @update: 2022-07-11 15:52
 */

import $http from './request.js'

export const authLogin = ({code}) => {
  return $http.request({
    url: '/wechat/user/auth/login',
    method: 'POST',
    header: {
      'Conten-Type': 'application/json'
    },
    data: {
      code
    }
  })
}