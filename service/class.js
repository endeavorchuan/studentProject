/**
 * @name: class
 * @author: chuanchuan
 * @date: 2022-07-04 12:34
 * @description：班级信息接口管理
 * @update: 2022-07-04 12:34
 */

import $http from './request.js'

// 查询班级列表  /wechat/class/list
export const getClassList = ({pageSize, pageNum}) => {
  return $http.request({
    url: '/wechat/class/list',
    method: 'POST',
    header: {
      "Content-Type": "application/json",
    },
    data: {
      pageNum,
      pageSize
    }
  })
}
