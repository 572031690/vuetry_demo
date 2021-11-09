<template>
  <div>
    da
    <child />
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
