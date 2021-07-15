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
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>