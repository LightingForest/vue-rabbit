import httpInstance from '@/utils/http.js'
//获取banner
export function getBannerApi(){
    return httpInstance({
        url:'/home/banner'
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url:'/home/new'
    })
}