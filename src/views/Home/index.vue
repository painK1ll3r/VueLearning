<template>
  <div>
    <h1>Home...</h1>
    <ul class="nav nav-tabs">
      <li><router-link to="/home/news">News</router-link></li>
      <li><router-link to="/home/massages">Massages</router-link></li>
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
.router-link-active {
  color: #fff !important;
  background-color: yellowgreen !important;
}
</style>