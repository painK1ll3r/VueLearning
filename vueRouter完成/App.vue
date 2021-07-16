<template>
  <div class="container">
    <h1>学习VueRouter</h1>
    <div class="row">
      <div class="col-md-3">
        <ul class="nav nav-stacked">
          <!-- 
            routerlink只负责切换路径
            router-link的类名可以通过exact-active-class 和active-class
          分别更改第一个类名和第二个类名
          -->
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/home">Home</router-link></li>
        </ul>
      </div>
      <div class="col-md-9">
        <!-- 跳转工作由router-view来完成 -->
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: "App" };
</script>

<style>
.router-link-active {
  color: #fff !important;
  background-color: yellowgreen !important;
}
</style>