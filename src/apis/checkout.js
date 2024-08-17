import request from '@/utils/http.js'
export const getCheckInfoApi=()=>{
    return request({
        url:'/member/order/pre'
    })
}
