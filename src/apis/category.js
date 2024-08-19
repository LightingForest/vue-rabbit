import httpInstance from '@/utils/http.js'
export function getCategoryApi(id){
    return httpInstance({
        url:'/category',
        params:{
            id
        }
    })
}