<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.isDone" @click="change" />
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" @click="delOne">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    todo: Object,
    changeState: Function,
    deleteOne: Function,
  },
  methods: {
    change() {
      this.changeState(this.todo.id);
    },
    delOne() {
      if (confirm(`确定要删除${this.todo.name}吗`)) {
        this.deleteOne(this.todo.id);
      }
    },
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>