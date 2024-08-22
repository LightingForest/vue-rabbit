import request from '@/utils/http.js'
//封装所有和用户相关的接口函数
export const LoginApi=({account,password})=>{
    return request({
        url:'/login',
        method:'post',
        data:{
            account,
            password
        }
    })
}