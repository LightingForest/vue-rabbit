import request from '@/utils/http.js'
//封装购物车相关接口
//加入购物车
export const insertCartApi=({skuId,count})=>{
    return request ({
        url:'/member/cart',
        method:'POST',
        data:{
            skuId,
            count
        }
    })

}
//获取购物车列表
export const findNewCartListApi=()=>{
    return request({
        url:'/member/cart'
    })
}
