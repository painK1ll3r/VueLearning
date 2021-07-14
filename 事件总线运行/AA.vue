<template>
  <div>
    <h1>here B..</h1>
    <h2>{{count}}</h2>
  </div>
</template>

<script>
export default {
  name: "AA",
  data(){
    return {
      count:0
    }
  },
  mounted(){
    this.$bus.$on("add",this.add)
  },
  beforeDestroy(){
    this.$bus.$off("add",this.add)
  },
  methods:{
    add(){
      this.count++
    }
  }
};
</script>

<style>
</style>