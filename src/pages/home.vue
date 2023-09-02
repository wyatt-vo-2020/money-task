<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <h1>Home Page</h1>
  <input type="text" v-model="searchText" />
  <ul>
    <li v-for="(customer, index) in customersFilled" :key="index">
      {{ customer }}
    </li>
  </ul>
  <button @click="onChangeSomething">Click</button>
</template>
<script>
import { computed, ref, reactive } from "vue";
export default {
  setup() {
    const searchText = ref("");
    const customers = reactive([
      "Something",
      "Le A",
      "Sky Abert",
      "Hula",
      "sala",
      "Someka",
    ]);
    const customersFilled = computed(() =>
      customers
        .map((customer) => {
          customer = customer.toLowerCase();
          return customer;
        })
        .filter((customer) => customer.includes(searchText.value.toLowerCase()))
    );
    return { searchText, customersFilled };
  },
};
</script>

<!-- <style>

</style> -->
