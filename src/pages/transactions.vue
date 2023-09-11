<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Transaction Page</h1>
  <dev v-if="transactions.length">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{
          name: 'transaction-details-route',
          params: { id: transaction.id },
        }"
      >
        {{ transaction.name }}
      </router-link>
    </div>
  </dev>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>Is loading</div>
  <h1>Testing</h1>
</template>
<script>
// import { ref } from "vue";
// export default {
//   setup() {
//     const transactions = ref([]);
//     const error = ref(null);
//     console.log(transactions, error);
//     const fetchAll = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/transaction");
//         if (!response.ok) throw new Error("Something is wrong");
//         transactions.value = await response.json();
//       } catch (err) {
//         error.value = err;
//         console.log(err.value);
//       }
//     };
//     fetchAll();
//     return { error, transactions };
//   },

// data() {
//   return {
//     transactions: [],
//   };
// },
// created() {
//   fetch("http://localhost:3000/transaction")
//     .then((response) => response.json())
//     .then((data) => {
//       this.transactions = data;
//     });
// },
// };
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    // console.log(store);
    store.dispatch("fetchAllTraction");
    const transactions = computed(() => store.state.transactions);
    const error = computed(() => store.state.error);
    return { transactions, error };
  },
};
</script>
