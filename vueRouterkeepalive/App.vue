<template>
  <div>
    <ul>
      <li><router-link to="./home"> this is home </router-link></li>
      <li><router-link to="./about"> this is about </router-link></li>
    </ul>
    <!-- 要指定哪些组件要缓存的话可以用include  指定哪些不缓存用exlude 也可以设置缓存书 max -->
    <keep-alive>
      <router-view todo="DgYx778" behavior="not do" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>