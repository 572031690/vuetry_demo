<template>
    <div class="swiper-container a">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>

        <div class="swiper-pagination"></div>

        <button @click="sendToUser">点击子组件调用父组件</button>
    </div>
</template>
<script>
// import {Swiper,Navigation,Pagination} from 'swiper' //js文件
// import 'swiper/swiper-bundle.min.css'
export default {
    mounted() {
       console.log('swiper');
    //    new Swiper('.a',{
    //        loop:true, 
    //        //如果要分页
    //        pagination: {
    //            el:'.swiper-pagination'
    //        }
    //    }) 
    },   
    methods: {
        sendToUser() {
            this.$emit('getSon', '发送给父组件：',1111111111)
        }
    } 
}

</script>
<style >
   @import ''; 
</style>