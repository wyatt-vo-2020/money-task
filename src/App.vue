<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <router-view></router-view>
  <base-nav />
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    BaseNav: Nav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
