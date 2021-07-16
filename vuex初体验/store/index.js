import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 0,
  // isOdd: "",
};
const getters = {
  oddOrEven(state){
    return state.count&1?'奇数':'偶数'
  }
}

const actions = {
  increment(store) {
    store.commit("INCREMENT");
  },
  decrement({ commit }) {
    commit("DECREMENT");
  },
  incrementIfOdd({ commit, state }) {
    if (state.count & 1) {
      commit("INCREMENT");
    }
  },
  incrementAsync({ commit }) {
    setTimeout(() => {
      commit("INCREMENT");
    }, 1000);
  },
  // isOdd({ commit }) {
  //   commit("ISODD");
  // },
};

const mutations = {
  INCREMENT(state) {
    state.count++;
  },
  DECREMENT(state) {
    state.count--;
  },
  // ISODD(state) {
  //   if(state.count&1){
  //     state.isOdd="奇数"
  //   }else{
  //     state.isOdd="偶数"
  //   }
  // },
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
export default store;
