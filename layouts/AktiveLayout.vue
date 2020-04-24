<template>
  <v-app>
    <nav-bar />
    <slot />
    <aktive-footer />
  </v-app>
</template>

<script>
  import NavBar from "../components/NavBar";
  import AktiveFooter from "../components/AktiveFooter";
  export default {
    name: "AktiveLayout",
    components: {AktiveFooter, NavBar}
  }
</script>

<style scoped>

</style>
