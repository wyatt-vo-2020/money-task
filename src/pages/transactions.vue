<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Transaction Page</h1>
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
</template>
<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    fetch("http://localhost:3000/transaction")
      .then((response) => response.json())
      .then((data) => {
        this.transactions = data;
      });
  },
};
</script>
