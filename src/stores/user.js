import { ref } from 'vue'
import { defineStore } from 'pinia'
import {LoginApi} from "@/apis/user.js";

export const useUserStore = defineStore('user', () => {
    const userInfo=ref({})
    const getUserInfo=async ({account,password})=>{
        const res=await LoginApi({account,password})
        userInfo.value=res.result
    }

    return {
        userInfo,
        getUserInfo
    }
})
