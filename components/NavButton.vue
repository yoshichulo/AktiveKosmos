<template>
  <v-menu open-on-hover bottom offset-y>
    <template v-slot:activator="{ on }">
      <div class="nav-button">
        <a v-on="on">{{ link.title }}<v-icon>arrow_drop_down</v-icon></a>
      </div>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in link.subs" :key="index" @click="" class="nav-menu-option">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: "NavButton",
    props: {
      link: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  .nav-button {
    height: 100%;
    justify-content: center;
    text-transform: uppercase;
    padding-left: 1%;
    padding-right: 1%;
  }

  .nav-button a {
    text-decoration: none;
    padding-bottom: 3px;
    color: black;
  }

  .nav-button a:hover {
    color: orange;
  }

  .v-list-item--link:hover {
    background-color: white;
    color: orange;
  }
</style>
