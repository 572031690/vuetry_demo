<template>
  <div>
    这是我父亲的v-model内容我要改变他：{{give}}
    <br>
    <button @click="returnBackFn">点击我子组件改变父组件</button>
  </div>
</template>

<script>
export default {
  // props: {
  //   give: String
  // },
  model: {
    prop: 'give',
    event: 'returnBack'
  },
  methods: {
    returnBackFn() {
      this.$emit('returnBack', '还你200块');
    }
  }
}
</script>

<style>

</style>
