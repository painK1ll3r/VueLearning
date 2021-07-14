<template>
  <div>
    <h1>here we Cc...</h1>
    <slot name="weCrash" :username="username" />
  </div>
</template>

<script>
export default {
  name: "Crash",
  data() {
    return {
      username: "Qoo",
      price: 2.5,
    };
  },
};
</script>

<style>
</style>