<template>
  <div style="margin-top: 50px">
    <slot name="Break1" />
    <p>----------------------------</p>
    <slot />
    <p>----------------------------</p>
    <slot name="Break2" :price="price" />
  </div>
</template>

<script>
export default {
  name: "Break",
  data() {
    return {
      price: 2.5,
    };
  },
  mounted() {
    this.$bus.$on("changePrice",this.changePrice);
  },
  beforeDestroy(){
    this.$bus.$off("changePrice",this.changePrice);
  },
  methods: {
    changePrice() {
      this.price += 1.5;
    },
  },
};
</script>

<style>
</style>