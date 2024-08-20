import request from '@/utils/http'


export const getDetailApi = (id) => {
    return request({
        url: '/goods',
        params: {
            id
        }
    })
}