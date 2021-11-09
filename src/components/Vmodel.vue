<template>
  <div>
    father:{{modelData}}
    <child v-model="modelData"/>
  </div>

</template>

<script>
import child from './Vmodel/children.vue'
export default {
  components: {
    child
  },
  data() {
    return {
      modelData:'200'
    }
  }
}
</script>

<style>

</style>
