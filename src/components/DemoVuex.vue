<template>
  <div>
    {{ this.$store.state.count }}-----------------{{
      this.$store.getters.computedCount
    }}
    <br />
    <button @click="addcount()">增加</button> <br />
    <ul>
      <li v-for="item in comingListGetter">
          {{item.title}}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
//1.引入store 建议名字不要改
import store from "../vuex/store.js";
//2.组件
export default {
  mounted() {},
  computed: {
    ...mapGetters(["comingListGetter"]),
  },
  data() {
    return {
      msg: "132",
    };
  },
  //   store:store
  store, //上面的简写
  methods: {
    addcount() {
      //改变vuex store里面的数据
      this.$store.commit("INCCOUNT"); //触发mutations 改变state里面的数据
    },
  },
};
</script>