/**
 * @name: start-school
 * @author: chuanchuan
 * @date: 2022-07-08 21:10
 * @description：请求面试流程数据
 * @update: 2022-07-08 21:10
 */

import $http from './request.js'

// 面试流程 /wechat/process/list
export const getProcessList = ({pageNum, pageSize}) => {
    return $http.request ({
        url: '/wechat/process/list',
        method: 'POST',
        header: {
            "Conten-Type": "application/json"
        },
        data: {
            pageNum,
            pageSize
        }
    })
}