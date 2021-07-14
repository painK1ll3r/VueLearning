<template>
  <div><h1>here's Child...</h1>
  {{count}}
  </div>
</template>

<script>
export default {
  name: "Child",
  // props:["count"]
  // props:{
  //   count:Number
  // }
  props:{
    count:{
      type:Number,
      required:true,
      validator(val){
        return val >=18;
      }
    }
  }
};
</script>

<style lang="less" scoped>

</style>