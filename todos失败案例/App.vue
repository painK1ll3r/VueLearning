<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header />
      <List />
      <Footer />
      <!-- <span v-show="!this.todos.length">恭喜您,喝完拉</span> -->
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";
export default {
  name: "App",
  components: {
    Header,
    List,
    Footer,
  },
};
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>