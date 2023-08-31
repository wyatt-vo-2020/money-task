<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="nav">
    <router-link :to="{ name: 'home-route' }">Home </router-link>
    <router-link :to="{ name: 'transactions-route' }">
      Transactions
    </router-link>
    <!-- <router-link to="/transactions/:id">TransactionDetails </router-link> -->
    <!-- <router-link>Overview4</router-link>
    <router-link>Overview5</router-link> -->
  </nav>
</template>
