import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  todos: [
    { id: 1, todoName: "Qoo", price: 2.5 },
    { id: 2, todoName: "Suntory", price: 4 },
    { id: 3, todoName: "Cola", price: 3 },
  ],
};
const getters = {};
const actions = {
  addTodo({ commit }, todoName) {
    if (!todoName) return;
    commit("ADD_TODO", todoName);
  },
  delTodo({ commit }, id) {
    commit("DEL_TODO", id);
  },
};
const mutations = {
  ADD_TODO(state, todoName) {
    state.todos.push({
      id: +new Date(),
      todoName,
      price: Math.ceil(Math.random() * 6 + 2),
    });
  },
  DEL_TODO(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
export default store;
