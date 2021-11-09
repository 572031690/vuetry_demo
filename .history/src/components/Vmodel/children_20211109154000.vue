<template>
  <div>
    这是我父亲的v-model内容我要改变他：{{gives}}
    <br>
    <button @click="returnBackFn">点击我子组件改变父组件</button>
  </div>
</template>

<script>
export default {
  props: {
    gives: String
  },
  model: {
    prop: 'gives',
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
