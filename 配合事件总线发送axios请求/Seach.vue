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
import axios from 'axios'
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    async handleClick() {
      if(!this.searchText){
        alert("请输出内容进行搜索")
        return
    }
      this.$bus.$emit("setLoading", true);
      const res = await axios({
        method: "GET",
        url: "https://api.github.com/search/users",
        params: {
          // querystring参数
          q: this.searchText.trim(),
        },
      });
      console.log(res);
      let users = res.data.items.map(user=>{
        return{
          id:user.id,
          login:user.login,
          avatar_url:user.avatar_url,
          html_url:user.html_url
        }
      })
      this.$bus.$emit("setLoading", false);
      this.$bus.$emit("setUsers", users);
      
    },
  },
};
</script>

<style>
</style>