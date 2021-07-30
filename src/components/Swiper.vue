<template>
    <div class="swiper-container a">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>

        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
// import {Swiper,Navigation,Pagination} from 'swiper' //js文件
// import 'swiper/swiper-bundle.min.css'
export default {
    mounted() {
    //    console.log('swiper');
    //    new Swiper('.a',{
    //        loop:true, 
    //        //如果要分页
    //        pagination: {
    //            el:'.swiper-pagination'
    //        }
    //    }) 
    },    
}

</script>
<style >
   @import ''; 
</style>