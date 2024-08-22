import { ref } from 'vue'
import { defineStore } from 'pinia'
import {LoginApi} from "@/apis/user.js";

export const useUserStore = defineStore('user', () => {
    const userInfo=ref({})
    const getUserInfo=async ({account,password})=>{
        const res=await LoginApi({account,password})
        userInfo.value=res.result
    }
    //清除用户信息数据
    const clearUserInfo=()=>{
        userInfo.value={}
    }

    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
})
