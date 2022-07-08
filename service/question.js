/**
 * @name: question
 * @author: chuanchuan
 * @date: 2022-07-07 11:58
 * @description：请求面试题的信息
 * @update: 2022-07-07 11:58
 */

import $http from './request.js'

// 查询面试题 /wechat/questions/typeList
export const getQuestionTypeList = ({pageNum, pageSize}) => {
    return $http.request({
        url: '/wechat/questions/typeList',
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

// 查询面试题  /wechat/questions/list
export const getQuestionList = ({pageNum, pageSize, typeId}) => {
    return $http.request({
        url: '/wechat/questions/list',
        method: 'POST',
        header: {
            "Content-Type": "application/json"
        },
        data: {
            pageNum,
            pageSize,
            typeId
        }
    })
}

// 获取面试题总条数  /wechat/questions/selQuestionNum/{typeId}
export const getQuestionNum = ({typeId}) => {
    return $http.request({
        url: '/wechat/questions/selQuestionNum/' + typeId,
        method: 'GET'
    })
}