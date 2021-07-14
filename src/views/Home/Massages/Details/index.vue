<template>
  <div>
    <ul>
      <li v-for="(value, key) in massages" :key="key">{{ key }}{{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      massages: {},
    };
  },
  watch: {
    $route: {
      handler() {
        setTimeout(() => {
          const id = this.$route.params.id;
          this.massages = {
            id,
            name: "message" + id,
            price: "tool" + id,
          };
        }, 1000);
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>