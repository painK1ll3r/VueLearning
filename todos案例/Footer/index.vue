<template>
  <div class="todo-footer">
    <label>
      <input
        type="checkbox"
        @click="changeAll"
        :checked="todos.every((todo) => todo.isDone)"
      />
    </label>
    <span>
      <span>已完成{{isDoneTasks}}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="delSome">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    total: Number,
    isDoneTasks: Number,
    todos: Array,
    changeAllState: Function,
    deleteSome: Function,
  },
  methods: {
    changeAll() {
      this.changeAllState();
    },
    delSome() {
      this.deleteSome();
    },
    computed: {},
  },
};
</script>

<style>
</style>