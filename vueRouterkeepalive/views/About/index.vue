<template>
  <div>
    <h1>About</h1>
    <div>我想{{ todo }},但是我的脑子告诉我{{ behavior }}</div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: ["todo", "behavior"],

  mounted() {
    console.log("Ab mounted");
  },
  beforeDestroy() {
    console.log("Ab Destroy");
  },
  activated() {
    console.log("AB AC");
  },
  deactivated() {
    console.log("AB DA");
  },
};
</script>

<style>
</style>