import httpInstance from "@/utils/http.js";
export function getCategoryApi(){
    return httpInstance({
        url: '/home/category/head'
    })
}