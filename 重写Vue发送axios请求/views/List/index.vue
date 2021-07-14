<template>
  <div>
    <!-- 因为还有数据加载时也要显示这个标签所以这里给loading优先判断 优先显示 -->
    <h1 v-if="isLoading">Loading...</h1>
    <div class="row" v-else-if="items.length">
      <div class="card" v-for="item in items" :key="item.id">
        <a :href="item.html_url" target="_blank">
          <img
            :src="item.avatar_url"
            style="width: 100px"
          />
        </a>
        <p class="card-text">{{item.login}}</p>
      </div>
    </div>
    <h1 v-else>请输入内容进行搜索</h1>
  </div>
</template>
  
<script>
export default {
  name: "List",
  data() {
    return {
      isLoading: false,
      items: [],
    };
  },
  mounted() {
    this.$bus.$on("setLoading", this.setLoading);
    this.$bus.$on("setItems", this.setItems);
  },
  methods: {
    setLoading(state) {
      this.isLoading = state;
    },
    setItems(items) {
      this.items = items;
    },
  },
};
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>