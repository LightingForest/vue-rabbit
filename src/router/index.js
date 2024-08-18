import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from "@/views/Login/PayBack.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'layout',
      component:Layout,
      children:[
        {
          path:'',
          name:'home',
          component:Home
        },
        {
          path:'category/:id',
          name:'category',
          component:Category
        },
        {
          path:'category/sub/:id',
          name:'subcategory',
          component:SubCategory
        },
        {
          path:'detail/:id',
          name:'detail',
          component:Detail
        },
        {
          path:'cartlist',
          name:'cartlist',
          component:CartList
        },
        {
          path:'checkout',
          name:'checkout',
          component:Checkout
        },
        {
          path:'pay',
          name:'pay',
          component:Pay
        },
        {
          path:'/paycallback',
          name:'paycallback',
          component:PayBack
        }

      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ],
  //路由行为配置项
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
