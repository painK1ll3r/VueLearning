<template>
  <div class="Outter"><p>{{count}}</p><button @click="count++">按钮</button></div>
</template>

<script>
export default{
  name:'App',
  data(){
    return {
      count:0
    }
  }
}
</script>

<style lang="less">
  .Outter{
    height: 200px;
    background-color: slateblue;
  }
</style>