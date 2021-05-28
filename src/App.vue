<template>
  <Navbar v-if="!['Login'].includes($route.name)"/>
  <router-view></router-view>
  <Footer v-if="!['Login'].includes($route.name)"/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
}

#app {
  min-height: 100vh;
  display: block;
}
</style>
