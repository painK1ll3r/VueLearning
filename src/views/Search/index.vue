<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="searchText"
      />
      <button @click="handleClick">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    async handleClick() {
      if (!this.searchText) {
        alert("请输入内容进行搜索");
        return;
      }
      this.$bus.$emit('setLoading',true)
      const res = await axios({
        method: "GET",
        url: "https://api.github.com/search/users",
        params:{
          q:this.searchText
        }
      });
      console.log(res);
      let items = res.data.items.map(item=>{
        return {
          id:item.id,
          html_url:item.html_url,
          avatar_url:item.avatar_url,
          login:item.login
        }
      })
      this.$bus.$emit('setLoading',false)
      this.$bus.$emit('setItems',items)
      this.searchText=""
    },
  },
};
</script>

<style>
</style>