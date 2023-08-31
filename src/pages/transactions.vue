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
      transactions: [
        {
          id: 1,
          name: "Num1",
          price: 100000,
        },
        {
          id: 2,
          name: "Num2",
          price: 200000,
        },
        {
          id: 3,
          name: "Num3",
          price: 300000,
        },
      ],
    };
  },
};
</script>
