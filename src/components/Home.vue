<template>
  <div id="home">
    <div class="mask" v-if="showModal" @click="showModal=false"></div>
    <div class="pop" v-if="showModal">
        <button @click="showModal=false" class="btn">点击出现弹框</button>
    </div>
    <button @click="showModal=true" class="btn">点击出现弹框</button>
    <br>
      {{list | listfliter}}
    <hr>
    <br>
    <div v-bind:title="title" class="mh"> </div>
    <br>
    <div v-html="h2"> </div>
     <br>
    <div v-text="msg"></div>

    <br>
    <div :class="{'red':!flage,'blue':flage}">你好</div>

  </div>
</template>
 
<script>
import Vue from 'vue'
Vue.filter('listfliter',function(list){
  // console.log(list);
  // var li = [1,2,3]
  // var newli = li.map(item => {
  //   return `mjh${item}`
  // })
  // console.log(newli);
  return list.filter(item => item>1)
})
export default {
  data(){
      return{
          msg:'132',
          showModal: false,
          title:"加油",
          flage:true,
          list:[1,2,3,4,5],
          h2:' <h2>我是h2123</h2>'
      }
  }
}
</script>

<style>
.mask {
  background-color: #000;
  opacity: 0.3;  /*不透明度 设置点击后出现边框的周围阴影不透明度 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1
}
.pop {
  background-color: #fff;
  position: fixed;
  top: 100px;
  left: 300px;
  width: calc(100% - 900px); /* 设置显示大小周围边框阴影大小 */
  height:calc(100% - 600px);
  z-index: 2
}
.btn {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid blue;
  padding: 4px 12px;
}

.mh{
  height: 25px;
  width: 25px;
  background-color: #000;
}

.red{
    color: red;
  }
  .blue{
    color: blue;
  }


</style>
