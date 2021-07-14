<template>
  <div>
    <h1>here B..</h1>
    <button @click="$bus.$emit('add')">按钮</button>
  </div>
</template>

<script>
export default {
  name: "BB",
};
</script>

<style>
</style>