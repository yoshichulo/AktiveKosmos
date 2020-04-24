<template>
  <v-menu open-on-hover bottom offset-y>
    <template v-slot:activator="{ on }">
      <div class="nav-button">
        <a v-on="on">{{ link.title }}<v-icon>arrow_drop_down</v-icon></a>
      </div>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in link.subs" :key="index" @click="" class="list-item-container">
        <v-list-item-title class="list-item">{{ item.title }}</v-list-item-title>
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
  }

  .nav-button a {
    text-decoration: none;
    padding-bottom: 3px;
    color: black;
  }

  .nav-button a:hover {
    color: orange;
  }

  .list-item-container {
    background-color: white !important;
  }

  .list-item-container:hover {
    background-color: white !important;
    opacity: 1;
  }
  .list-item {
    color: black;
  }

  .list-item:hover {
    background-color: white;
    color: orange;
  }
</style>
