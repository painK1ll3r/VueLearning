<template>
  <div>
    <ul>
      <li v-for="val,key in details" :key="key">
        {{key}}-{{val}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      details: {},
    };
  },
  watch: {
    $route: {
      handler() {
        setTimeout(() => {
          const id = this.$route.params.id;
          this.details = {
            id: id,
            message: "message" + id,
            price: "price" + id,
          }; 
        }, 500);
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>