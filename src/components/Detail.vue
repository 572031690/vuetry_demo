<template>
  <div id="detail" v-if="id">
    {{id}}---------dsadsaaaaaaaaaaaaaaaa
    <hr>
    <h2>swiper组件</h2>
    <!-- <swiper></swiper> -->

  </div>
</template>

<script>
import swiper from './DetailSwiper.vue'
// import bus from '../Bus/index'
export default {
  data () {
    return {
      id:''
    }
  },
  beforeMount () {
    // this.$bus.$emit('topnav',false)
    this.$store.commit('HIDETOPBAR',false)
  },
  mounted () {
    this.getId()
  },
  beforeDestroy () {
    // this.$bus.$emit('topnav',true)
    this.$store.commit('HIDETOPBAR',true)
  },
  methods : {
    getId () {
      console.log(this.$route.params.id);
      this.id = parseInt(this.$route.params.id) + 1
    }
  },
  components: {
    swiper
  }
}
</script>

<style>

</style>