<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" />
    </label>
    <span>
      <span>{{ allTaskLength }}</span> / 全部
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    this.$bus.$emit("doneTodoLength");
  },
};
</script>

<style>
</style>