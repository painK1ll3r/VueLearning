<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :changeState="changeState" :deleteOne="deleteOne" />
      <Footer :total='todos.length' :todos="todos"
      :changeAllState="changeAllState" :deleteSome="deleteSome"
      :isDoneTasks='isDoneTasks'/>
      <span v-show="!this.todos.length">恭喜您,喝完拉</span>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";
export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, name: "Qoo", isDone: false },
        { id: 2, name: "Suntory", isDone: true },
      ],
    };
  },
  methods: {
    addTodo(name) {
      this.todos.push({ id: +new Date(), name, isDone: false });
    },
    changeState(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      todo.isDone = !todo.isDone;
    },
    deleteOne(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    changeAllState() {
      const flag = this.todos.every((todo) => todo.isDone);
      this.todos = this.todos.map((todo) => {
        if (todo.isDone === flag) {
          todo.isDone = !flag;
        }
      });
    },
    deleteSome() {
      this.todos = this.todos.filter((todo) => !todo.isDone);
    },
  },
  components: {
    Header,
    List,
    Footer,
  },
  computed:{
    isDoneTasks(){
      return this.todos.reduce((p,c)=>{
        return p+c.isDone?1:0
      },0)
    },
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