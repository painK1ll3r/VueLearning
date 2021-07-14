<template>
  <div>
    <Atlas>
      <p>{{ count }}</p>
      <button @click="count++">按钮</button>
    </Atlas>
    <Boi>
      <template #myFir>
        <s> i dont wanna live forever </s>
      </template>

      <u> such a pity </u>

      <template v-solt:myLast>
        <i> till we c the sunlight </i>
      </template>
    </Boi>
    <Crash>
      <template #weCrash='slotScoped' >
        <s> we just pretend {{slotScoped.username}}</s>
      </template>

      <template v-slot>

      </template>
    </Crash>
  </div>
</template>

<script>
import Atlas from "./Atlas";
import Boi from "./Boi.vue";
import Crash from "./Crash.vue";
export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  components: {
    Atlas,
    Boi,
    Crash,
  },
};
</script>

<style>
</style>