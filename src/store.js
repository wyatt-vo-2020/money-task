import { createStore } from "vuex";
// import Vuex from "Vuex";
// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 100,
      transaction: null,
      transactions: [1, 2, 3, 4],
    };
  },
  getters: {
    transactionFiltered(state) {
      return state.transactions.filter((transaction) => transaction % 2 === 0);
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setTransaction(state, transactionPayload) {
      state.transaction = transactionPayload;
    },
  },
  actions: {
    async fetchTraction({ commit }, { id }) {
      const res = await fetch("http://localhost:3000/transaction/" + id);
      const data = await res.json();
      commit("setTransaction", data);
    },
  },
});
export default store;
