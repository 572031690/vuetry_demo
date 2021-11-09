<template>
  <div id="User">
            <!-- <swiper :key="item.length">
            <div class="swiper-slide" v-for='item in 10 ' :key="item">
              {{item}}
            </div>  
            </swiper>     -->

            <swiper v-on:getSon='getSwiperSon'></swiper>
      <div class="left">
          <ul>
                <li>
                  <router-link to="/user/useradd">添加用户</router-link>
                  
                </li>
                <li>
                  <router-link to="/user/userlist">用户列表</router-link>
                </li>
                <li>
                  {{this.$store.state.count}} <button @click="addnum()">增加 </button>
                </li>
          </ul>
      </div>
      <div class="right">
          <router-view></router-view>
          <div class="mgs">mmm</div>
          <div class="mgs">mmm</div>
          <div class="mgs">mmm</div>
      </div>
    
  </div>
</template>

<script>
import swiper from '../components/Swiper.vue'
//1.引入store
import store from '../vuex/store.js';
export default {
  components: {
    swiper
  },
  data(){
    return{
      name: 'App'
    }
  },store,
  methods: {
    addnum(){
       //改变vuex store里面的数据
          this.$store.commit('INCCOUNT');
    },
    getSwiperSon (data,data2) {
      console.log(data,data2);
    }
  },

  
}
</script>

<style>
#user{
       display: flex;
       flex-direction: row;
       width: 800px;
       
   }
   .left{
     display: flex;
       width: 200px;
       min-height: 400px;
       border: 1px solid #eee;
       /* flex: 1; */
   }
  /* .right{
    display: flex;
  } */
  .mgs{
    height: 500px;
    width: 200px;
    border: 1px solid red;
  }
</style>
