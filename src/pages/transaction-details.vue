<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Transcation Detail Page</h1>
  <div v-if="transaction">
    <h2>{{ $route.params.id }}</h2>
    <h2>{{ transaction.name }}</h2>
    <h2>{{ transaction.price }}</h2>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  // data() {
  //   return {
  //     transaction: null,
  //   };
  // },
  // computed: {
  //   transaction() {
  //     return this.$store.state.transaction;
  //   },
  //   transactionsFilter() {
  //     return this.$store.getters.transactionFiltered;
  //   },
  // },
  // created() {
  //   // fetch("http://localhost:3000/transaction/" + this.$route.params.id)
  //   //   .then((response) => response.json())
  //   //   .then((data) => (this.transaction = data));
  //   this.$store.dispatch("fetchTraction", { id: this.$route.params.id });
  // },
  setup() {
    const store = useStore();
    const route = useRoute();
    store.dispatch("fetchTraction", { id: route.params.id });
    const transaction = computed(() => store.state.transaction);
    return { transaction };
  },
};
</script>

<!-- <style>

</style> -->
