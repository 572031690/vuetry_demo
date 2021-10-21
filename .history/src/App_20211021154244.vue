<template>
  <div id="app">
    <div ref="ddd" :class="isFixed ? 'fixed' : '' "  v-show="isTopBarShow" style="border: 1px solid black;">
      <!-- <router-link to="/user" tag="span" active-class="myactive">User</router-link>
      <router-link to="/home" tag="span" active-class="myactive">home</router-link>
      <router-link to="/demovuex" tag="span" active-class="myactive">vuex</router-link>
      <router-link to="/news" active-class="myactive">news-Vuex数据持久化</router-link> -->
      <span @click="goCom(index)" v-for="(item, index) in ComponentList" :key="index" :class="{'myactive': i === index}">{{item}}</span>
    </div>
    <hr />
    <!-- <User></User> -->
    <!-- <router-view></router-view> -->

    <component :is="ComponentName" v-show="isTopBarShow"></component>
    <router-view />
  </div>
</template>

<script>
import User from './components/User.vue'
import Home from './components/Home.vue'
import DemoVuex from './components/DemoVuex.vue'
import News from './components/News.vue'
import test from './components/test.vue'

import axios from "axios";
import {  mapState } from 'vuex'
// import bus from './Bus/index'
export default {
  components: {
    User,
    Home,
    News,
    DemoVuex,
    test,
  },
  data() {
    return {
      isFixed: false,
      ComponentList:['User','Home','News','DemoVuex','test'],
      i: 0,
      ComponentName: 'User'
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
    console.log('object:', this.$router);
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
    goCom(e) { // 组件is跳转
      this.i = e
      this.ComponentName = this.ComponentList[e]
    },
    //吸顶
    handleScroll(){
      //获取屏幕轮播的的位置
      console.log(document.documentElement.scrollTop)
      //获取ddd的高度
      console.log(this.$refs.ddd.offsetHeight);
      if(document.documentElement.scrollTop > this.$refs.ddd.offsetHeight*4){
        this.isFixed = true
      }else{
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
span {
  cursor: pointer;
  background: #eee;
  margin-right: 5px;
  padding: 2px;
}
</style>
