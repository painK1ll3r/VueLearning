<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li>
        <router-link to="/home/news"> News </router-link>
      </li>
      <li>
        <router-link to="/home/messages"> Messages </router-link>
      </li>
    </ul>
    <div>我想{{ todo }},但是我的脑子告诉我{{ behavior }}</div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["todo", "behavior"],
  mounted() {
    console.log("Home mounted");
  },
  beforeDestroy() {
    console.log("Home Destroy");
  },
};
</script>

<style>
</style>