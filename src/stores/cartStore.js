import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {useUserStore} from "@/stores/user.js";
import {delCartApi, findNewCartListApi, insertCartApi} from "@/apis/cart.js";

export const useCartStore= defineStore('cart',()=>{
    const userStore=useUserStore()
    const isLogin=computed(()=>userStore.userInfo.token)
    //定义state
    const cartList=ref([])
    //获取最新购物车列表action
    const updateNewList=async ()=>{
        const res= await findNewCartListApi()
        cartList.value=res.result
    }
    //定义action
    const addCart=async (goods)=>{
        const {skuId,count}=goods
        if (isLogin.value){
            console.log(isLogin.value)
            //登录之后的加入购物车逻辑
            await insertCartApi({skuId,count})
            updateNewList()
        }else {
            //添加购物车操作
            //已添加过 count+1
            //没有添加过 直接push
            //思路 通过匹配过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
            const item= cartList.value.find((item)=>goods.skuId===item.skuId)
            if (item){
                item.count++
            }else {
                cartList.value.push(goods)
            }
        }

    }
    const delCart=async (skuId)=>{
        if(isLogin.value){
            //调用接口实现删除功能
            await delCartApi([skuId])
            updateNewList()
        }else {
            //思路：找到要删除项的下标值 - splice
            //使用数组的过滤方法 - filter
            const idx = cartList.value.findIndex((item)=>skuId===item.skuId)
            cartList.value.splice(idx,1)
        }
    }
    //清除购物车
    const clearCart=()=>{
        cartList.value=[]
    }

    //计算属性
    //总的数量
    const  allCount= computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
    //总价
    const  allPrice= computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))

    //单选功能
    const singleCheck=(skuId,selected)=>{
        //通过skuId 找到要修改的某一项
        const item= cartList.value.find((item)=>item.skuId===skuId)
        item.selected=selected
    }

    //是否全选
    const isAll=computed(()=>cartList.value.every((item)=>item.selected))

    //全选功能
    const allCheck=(selected)=>{
        //把cartList中的每一项的selected都设置为选中状态
        cartList.value.forEach((item)=>item.selected=selected)
    }
    //已选择数量
    const selectedCount=computed(()=>cartList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count,0))

    //已选择商品价钱合计
    const selectedPrice=computed(()=>cartList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count*c.price,0))

    return{
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        allCheck,
        selectedCount,
        selectedPrice,
        clearCart
    }
},{
    persist:true
})