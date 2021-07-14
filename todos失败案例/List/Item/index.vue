<template>
  <li  @mouseenter="isShow=true" @mouseleave="isShow=false">
    <label>
      <input type="checkbox" :checked="todo.isDone" v-model="checked"/>
      <span>{{ todo.name }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="$bus.$emit('deleteOne',todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props:{
    todo:Object
  },
  data(){
    return {
      isShow:false
    }
  },
  computed:{
    checked:{
      get(){
        return this.todo.isDone
      },
      set(){
        this.$bus.$emit('changeOne',this.todo.id)
      }
    }
  }
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