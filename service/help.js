/**
 * @name: start-school
 * @author: chuanchuan
 * @date: 2022-07-06 16:58
 * @description：请求咨询帮助页数据
 * @update: 2022-07-06 16:58
 */

import $http from './request.js'

// 查询咨询帮助页  /wechat/help/list

export const getHelpList = ({pageSize, pageNum}) => {
    return $http.request({
        url: '/wechat/help/list',
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