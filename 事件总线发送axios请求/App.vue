<template>
  <div class="container">
    <Seach />
    <List />
  </div>
</template>

<script>
import Seach from './Seach.vue'
import List from './List.vue'
export default {
  name:"App",
  components:{
    Seach,List
  }
};
</script>

<style>
</style>