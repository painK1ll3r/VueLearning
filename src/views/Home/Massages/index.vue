<template>
  <div>
    <h2>Massages...</h2>
    <ul>
      <li v-for="pro in details" :key="pro.id">
        <router-link :to="`/home/massages/details/${pro.id}`">
          {{ pro.proName }}-{{ pro.id }}
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Massages",
  data() {
    return {
      details: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.details = [
        { id: 1, proName: "Qoo" },
        { id: 3, proName: "Suntory" },
        { id: 5, proName: "Cola" },
      ];
    }, 1000);
  },
};
</script>

<style>
</style>