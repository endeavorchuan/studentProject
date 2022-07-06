/**
 * @name: start-school
 * @author: chuanchuan
 * @date: 2022-07-06 11:31
 * @description：请求班级信息中名人堂数据
 * @update: 2022-07-06 11:31
 */

import $http from './request.js'

// 查询名人堂信息  /wechat/excellent/list
export const getExcellentList = ({pageSize, pageNum}) => {
  return $http.request({
    url: '/wechat/excellent/list',
    method: 'POST',
    header: {
      "Content-Type": "application/json"
    },
    data: {
      pageNum,
      pageSize
    }
  })
}
