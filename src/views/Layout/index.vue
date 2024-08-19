<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
import {useCategoryStore} from "@/stores/category.js";
import {onMounted} from "vue";

//触发获取导航列表的action
const categoryStore=useCategoryStore()
onMounted(()=>categoryStore.getCategory())
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <RouterView :key="$route.fullPath" />
<!--  <RouterView  />-->
  <LayoutFooter />
</template>