<template>
  <div id="app">
    <div ref="ddd" :class="isFixed ? 'fixed' : '' "  v-show="isTopBarShow">
      <router-link to="/user" tag="span" active-class="myactive">User</router-link>
      <router-link to="/home" tag="span" active-class="myactive">home</router-link>
      <router-link to="/demovuex" tag="span" active-class="myactive">vuex</router-link>
      <router-link to="/news" active-class="myactive">news-Vuex数据持久化</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import {  mapState } from 'vuex'
// import bus from './Bus/index'
export default {
  data() {
    return {
      isFixed: false,
      // isShow: true
    };
  },
  computed: {
    ...mapState(["isTopBarShow"])
        // isShow() {
        // // return this.$store.state.isTopBarShow
        // return mapState(["isTopBarShow"])

        // }
    },
  beforeMount() {
    //监听顶部栏在进入detail时隐藏和退出时显示
    // this.$bus.$on('topnav', (data) => {
    //   console.log('top被通知了',data);
    //   this.isShow = data
    // })
  },
  mounted() {
    //因为我们vue.config.js里面配置了跨域配置只要是以/api开头的都会被代理
    axios.get("/api/batch?v=1&sdk=1.7.11").then((res) => {
      console.log(res, "------------");
    });

    //监听窗口轮播 用于吸顶效果
    window.onscroll = this.handleScroll
  },
  //解绑防止其他页面也被监听
  beforeDestroy(){
    window.onscroll = null
  },
  methods: {
    //吸顶
    handleScroll(){
      //获取屏幕轮播的的位置
      console.log(document.documentElement.scrollTop)
      //获取ddd的高度
      console.log(this.$refs.ddd.offsetHeight);
      if(document.documentElement.scrollTop > this.$refs.ddd.offsetHeight*4){
        // console.log('1111')
        this.isFixed = true
      }else{
        // console.log('22222');
        this.isFixed = false
      }
    }
  },
};
</script>

<style scoped>
.myactive{
  color: red;
}
.fixed {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  /* background: #000; */
}
</style>
