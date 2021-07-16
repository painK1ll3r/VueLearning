<template>
  <div>
    ?????messages?
    <ul>
      <li v-for="drink in drinks" :key="drink.id">
        <!-- <router-link :to="`/home/messages/details/${drink.id}`">
          {{ drink.id }}-{{ drink.name }}-{{ drink.price }}
        </router-link> -->
        <router-link
          :to="{
            name: 'Details',
            params: {
              id: drink.id,
            },
            query: {
              name: 'Qoo',
              price: 2.5,
            },
          }"
          >{{ drink.id }}-{{ drink.name }}-{{ drink.price }}</router-link
        >
        <button @click="push(drink.id)">push</button>
        <button @click="replace(drink.id)">replace</button>
      </li>
    </ul>
    <button @click="back">back</button>
    <button @click="forward">forward</button>
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
  methods: {
    push(id) {
      this.$router.history.push({
        name: "Details",
        params: {
          id,
        },
        query: {
          name: "Qoo",
          price: 2.5,
        },
      });
    },
    replace(id) {
      this.$router.history.push({
        name: "Details",
        params: {
          id,
        },
        query: {
          name: "Qoo",
          price: 2.5,
        },
      });
    },
    back(){
      this.$router.history.go(-1)
    },
    forward(){
      this.$router.history.go(1)
    },
  },
};
</script>

<style>
</style>