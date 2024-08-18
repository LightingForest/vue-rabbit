//定义加载插件
import {useIntersectionObserver} from "@vueuse/core";

export const lazyPlugin={
    install(app){
        //加载逻辑
        //定义全局指令
        app.directive('img-laze',{
            mounted(el,binding){
                //el:指令绑定的元素 图片
                //binding: binding.value 指令等于号后面绑定的表达式值
                console.log(el,binding.value)
               const {stop}= useIntersectionObserver(
                    el,
                    ([{isIntersecting}])=>{
                        console.log(isIntersecting)
                        if(isIntersecting){
                            //进入视图区域
                            el.src=binding.value
                            stop()
                        }
                    }
                )
            }
        })
    }
}