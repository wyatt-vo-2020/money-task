import { reactive, readonly } from "vue";
// eslint-disable-next-line no-undef
const state = reactive({
  count: 0,
});
const setCount = function () {
  console.log("setCount");
  state.count = 10;
};
export default { state: readonly(state), setCount };
