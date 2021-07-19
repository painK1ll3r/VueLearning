<template>
  <el-card class="box-card">
    <template #header>
      <h3 class="title">todos</h3>
    </template>
    <el-input
      v-model="input"
      placeholder="请输入内容"
      @change="addTodo(input)"
    ></el-input>
    <template>
      <el-table :data="todos" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="todoName" label="品名"> </el-table-column>
        <el-table-column prop="price" label="价格"> </el-table-column>
        <el-table-column label="编辑">
          <template slot-scope="scope">
            <el-button type="danger" size="mini" @click="del(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
    <template $footer>
      <p>
        <span>已完成{{ doneTask }}</span> /
        <span>总任务{{ todos.length }}</span>
      </p>
    </template>
  </el-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "app",
  data() {
    return {
      input: "",
    };
  },
  computed: {
    ...mapState(["todos"]),
    //计算大于3的任务项
    doneTask() {
      return this.todos.reduce((p, c) => {
        return c.price >= 3 ? p + 1 : p;
      }, 0);
    },
  },
  methods: {
    ...mapActions(["addTodo", "delTodo"]),
    del(id) {
      this.delTodo(id);
    },
  },
};
</script>

<style>
.box-card {
  width: 480px;
}
.title {
  margin: 0;
}
</style>
