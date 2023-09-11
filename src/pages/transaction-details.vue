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
export default {
  // data() {
  //   return {
  //     transaction: null,
  //   };
  // },
  computed: {
    transaction() {
      return this.$store.state.transaction;
    },
    transactionsFilter() {
      return this.$store.getters.transactionFiltered;
    },
  },
  created() {
    // fetch("http://localhost:3000/transaction/" + this.$route.params.id)
    //   .then((response) => response.json())
    //   .then((data) => (this.transaction = data));
    this.$store.dispatch("fetchTraction", { id: this.$route.params.id });
  },
};
</script>

<!-- <style>

</style> -->
