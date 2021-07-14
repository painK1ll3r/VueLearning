<template>
  <div>
    <Action>
      <!-- 直接写在组件中间的内容会以默认插槽的形式传递 -->
      <p>{{ count }}</p>
      <button @click="handleClick">btn来自App</button>
    </Action>
    <Break>
      <template #Break1>
        <div>iamtheFirstOnededicateMyLife</div>
      </template>

      <p>udkwhatumeantome</p>

      <template v-slot:Break2='slotScoped'>
        <div>iamtheFirstOnededicateMyLife{{slotScoped.price}}</div>
      </template>
    </Break>
    <button @click="handlePirce">涨价</button>
  </div>
</template>

<script>
import Action from "./Action.vue";
import Break from "./Break.vue";
export default {
  name: "App",
  components: {
    Action,
    Break,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
    handlePirce(){
      this.$bus.$emit("changePrice")
    }
  },
};
</script>

<style>
</style>