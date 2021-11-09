<template>
  <div>
    这是我父亲的v-model内容我要改变他：{{gives}}
    <br>
    <button @click="returnBackFn">点击我子组件改变父组件</button>
  </div>
</template>

<script>
export default {
  // props: {
  //   gives: String // 名字根据model内的prop来
  // },
  props: {
    value: String // 名字根据model内的prop来
  },
  // model: {
  //   prop: 'gives', // 名字可以自定义
  //   event: 'returnBack' // 名字也可以自定义
  // },
  methods: {
    returnBackFn() {
      // this.$emit('returnBack', '还你200块');
      this.$emit('input', '还你200块');
    }
    // v-model 默认是将变量定义为'value' event 定义为 'input'
    // 所以当我们不设置model设置变量名的时候可以直接用props接受value，触发事件写input
  }
}
</script>

<style>

</style>
