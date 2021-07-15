<template>
  <div>
    ?????messages?
    <ul>
      <li v-for="drink in drinks" :key="drink.id">
        <router-link :to="`/home/messages/details/${drink.id}`">
          {{ drink.id }}-{{ drink.name }}-{{ drink.price }}
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Meassages",
  data() {
    return {
      drinks: [
        { id: 1, name: "Qoo", price: "778" },
        { id: 7, name: "Suntory", price: "886" },
        { id: 9, name: "Cola", price: "101" },
      ],
    };
  },
};
</script>

<style>
</style>