import { ref } from 'vue'
import { defineStore } from 'pinia'
import {LoginApi} from "@/apis/user.js";
import {useCartStore} from "@/stores/cartStore.js";
import {mergeCartApi} from "@/apis/cart.js";

export const useUserStore = defineStore('user', () => {
    const userInfo=ref({})
    const cartStore=useCartStore()
    const getUserInfo=async ({account,password})=>{
        const res=await LoginApi({account,password})
        userInfo.value=res.result
        //合并购物车操作
        await mergeCartApi(cartStore.cartList.map(item=>{
            return{
                skuId:item.skuId,
                selected:item.selected,
                count:item.count
            }
        }))
        cartStore.updateNewList()
    }
    //清除用户信息数据
    const clearUserInfo=()=>{
        userInfo.value={}
        //执行清除购物车
        cartStore.clearCart()
    }

    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
})
