<template>
  <div>
    <p>
      当前是{{ count }},是
      <!-- {{ this.$store.state.count&1?'奇数':'偶数' }} -->
      {{ oddOrEven }}
    </p>
    <button @click="INCREMENT">+</button>
    <button @click="DECREMENT">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "App",
  mounted() {
    console.log(this);
  },
  methods: {
    ...mapActions(['incrementIfOdd','incrementAsync']),
    ...mapMutations(['INCREMENT','DECREMENT'])
    // increment() {
    //   this.$store.commit("increment");
    // },
    // decrement() {
    //   this.$store.commit("decrement");
    // },
    // incrementIfOdd() {
    //   this.$store.dispatch("incrementIfOdd");
    // },
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync");
    // },
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['oddOrEven'])
  }
  // watch: {
  //   $store: {
  //     handler() {
  //         this.$store.dispatch('isOdd')
  //     },
  //     immediate:true
  //   },
  // },
};
</script>

<style>
</style>