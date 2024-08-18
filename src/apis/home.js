import httpInstance from '@/utils/http.js'
//获取banner
export function getBannerApi(){
    return httpInstance({
        url:'/home/banner'
    })
}