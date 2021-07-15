<template>
  <div>
    <ul>
      <li><router-link to='./home'> this is home </router-link></li>
      <li><router-link to='./about'> this is about </router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>