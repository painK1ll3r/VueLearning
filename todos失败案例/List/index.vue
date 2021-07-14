<template>
  <ul class="todo-main">
    <Item v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script>
import Item from "./Item";
export default {
  name: "List",
  data() {
    return {
      todos: [
        { id: 1, name: "打吃", isDone: false },
        { id: 2, name: "盒盒", isDone: true },
      ],
    };
  },
  mounted() {
    this.$bus.$on("addTodo", this.addTodo);
    this.$bus.$on("changeOne", this.changeOne);
    this.$bus.$on("deleteOne", this.deleteOne);
    this.$bus.$on("allTodoLength", this.allTodoLength);
    this.$bus.$on("doneTodoLength", this.doneTodoLength);
  },
  beforeDestroy() {
    this.$bus.$off("addTodo", this.addTodo);
    this.$bus.$off("changeOne", this.changeOne);
    this.$bus.$off("deleteOne", this.deleteOne);
    this.$bus.$off("allTodoLength", this.allTodoLength);
    this.$bus.$off("doneTodoLength", this.doneTodoLength);
  },
  methods: {
    addTodo(name) {
      if (!name) return;
      this.todos.push({ id: +new Date(), name, isDone: false });
    },
    changeOne(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      todo.isDone = !todo.isDone;
    },
    deleteOne(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    allTodoLength() {
      Vue.prototype.allTaskLength = this.todos.length;
    },
    doneTodoLength() {
      return this.todos.reduce((p, c) => {
        return p + c.isDone ? 1 : 0;
      }, 0);
    },
  },
  components: {
    Item,
  },
};
</script>

<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>