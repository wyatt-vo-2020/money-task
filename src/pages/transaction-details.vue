<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Transcation Detail Page</h1>
  <div v-if="transaction">
    <h2>{{ transaction.id }}</h2>
    <h2>{{ transaction.name }}</h2>
    <h2>{{ transaction.price }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch("http://localhost:3000/transaction/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transaction = data))
      .then(() => console.log(this.transaction));
  },
};
</script>

<!-- <style>

</style> -->
