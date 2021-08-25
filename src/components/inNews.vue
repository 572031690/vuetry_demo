<template>
  <div>
    {{id}}---------dsadsaaaaaaaaaaaaaaaa  
    <br>
    <div @click="$router.back(-1)">返回></div> 
  </div>
</template>

<script>
export default {
    data() {
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
  }
}
</script>

<style>

</style>