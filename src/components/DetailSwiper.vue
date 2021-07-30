<template>
    <div class="swiper-container filmswiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
<!-- 如果需要分配页码 -->
        <div class="swiper-pagination film-swiper-pagination"></div>
    </div>
</template>

<script>
// import 'swiper/swiper-bundle.css'
// import  Swiper from '../assets/swiper/swiper-3.4.2.min.js'
// import '../assets/swiper/swiper-3.4.2.min.css'
// Import Swiper Vue.js components
//   import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
//   import 'swiper/swiper.scss';
export default {
    mounted () {
        // new Swiper ('.filmswiper', {
        //     loop: true,
        //     autopaly: {
        //         delay: 2000
        //     },
        //     //如果需要分页器
        //     pagination: {
        //         el: '.swiper-pagination'
        //     }
        // })
    }
}
</script>

<style>
.swiper-wrapper img{
    width: 100%;
}

</style>