<template>
  <div>
    <h1>here's App...</h1>
    <Child :count="count"></Child>
    <button @click="count++">iambtn</button>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import Child from "./views/Child";
export default {
  name: "App",
  data() {
    return {
      count: 20,
      msg: "房间低飞在半空,拥挤在窗口的霓虹,呢喃着时间宇宙,所有的伤心握在胸口,晚霞盘旋在水中,把漂浮的世界都染红,想和你的呼吸相融,随着隧道的梦早已无踪",
    };
  },
  components: {
    Child,
  },
};
</script>

<style lang="less" >
p {
  background-color: slategray;
  font-size: 18px;
  text-decoration: line-through;
}
</style>