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
import { watch, computed, ref, reactive, watchEffect } from "vue";
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
    // computed gan giong methods
    // computed khong nhan tham so dau vao nen chi tac dong len cac doi tuong co san trong data
    // computed se thuc hien khi bien phu thuoc thay doi, con methods chi thuc hien khi duoc  goi
    const customersFilled = computed(() =>
      customers
        .map((customer) => {
          customer = customer.toLowerCase();
          return customer;
        })
        .filter((customer) => customer.includes(searchText.value.toLowerCase()))
    );
    // watch giam sat mot thuoc tinh nao do cua data
    // watch co tham so
    // watch chi thuc hien khi doi tuong giam sat thay doi
    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });
    // watchEffect giong computed
    // Ko nhan tham so dau vao ma track doi tuong nao do trong data
    // Thuc hien khi bien phu thuoc thay doi
    // Khac voi computed o cho trong return lai gia tri
    // Se chay it nhat mot lan du dependencies co thay doi hay khong
    watchEffect(() => {
      if (searchText.value) {
        console.log("run again");
      }
    });
    return { searchText, customersFilled };
  },
};
</script>

<!-- <style>

</style> -->
