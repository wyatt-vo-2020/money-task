import { createStore } from "vuex";
// import Vuex from "Vuex";
// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 100,
      transaction: null,
      transactions: [],
      error: null,
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
    setTransactions(state, transactionPayload) {
      state.transactions = transactionPayload;
    },
    setError(state, errorPayload) {
      state.error = errorPayload;
    },
  },
  actions: {
    async fetchTraction({ commit }, { id }) {
      const res = await fetch("http://localhost:3000/transaction/" + id);
      const data = await res.json();
      commit("setTransaction", data);
    },
    async fetchAllTraction({ commit }) {
      try {
        const response = await fetch("http://localhost:3000/transaction");
        if (!response.ok) throw new Error("Something is wrong");
        const data = await response.json();
        commit("setTransactions", data);
      } catch (err) {
        commit("setError", err.message);
        console.log(err);
      }
    },
  },
});
export default store;
